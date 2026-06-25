/**
 * Telegram Bot Notification Service
 * 
 * INDEPENDENT & OPTIONAL - Works separately from Formspree
 * DISABLED - Waiting for Telegram to become available
 * 
 * Can be re-enabled by adding environment variables:
 * - TELEGRAM_BOT_TOKEN: Telegram bot token
 * - TELEGRAM_CHAT_ID: Telegram chat ID
 * 
 * Re-enable: Set env vars + redeploy
 * See TELEGRAM_INTEGRATION.md for setup
 */

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, service, message } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate phone number format (10 digits)
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 10) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.error('Telegram env vars missing:', {
        hasToken: !!process.env.TELEGRAM_BOT_TOKEN,
        hasChat: !!process.env.TELEGRAM_CHAT_ID,
      });
      return res.status(200).json({
        success: true,
        message: 'Telegram not configured - skipping notification',
      });
    }

    let telegramMessage = `🔥 New Website Lead

👤 Name: ${name}

📞 Phone: ${cleanedPhone}

🛠️ Service: ${service}`;

    if (message && message.trim()) {
      telegramMessage += `

📝 Message:
${message}`;
    }

    telegramMessage += `

⏰ Submitted: ${new Date().toLocaleString()}`;

    // Send to Telegram API with timeout
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const telegramResponse = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!telegramResponse.ok) {
        let errorDetails = 'Unknown error';
        try {
          const telegramError = await telegramResponse.json();
          errorDetails = telegramError.description || JSON.stringify(telegramError);
        } catch (parseErr) {
          errorDetails = `HTTP ${telegramResponse.status}`;
        }
        
        console.warn(`Telegram API error: ${errorDetails}`);
        return res.status(200).json({
          success: true,
          message: 'Form processed but Telegram notification failed',
          details: errorDetails,
        });
      }

      let telegramResult;
      try {
        telegramResult = await telegramResponse.json();
      } catch (parseErr) {
        console.warn('Could not parse Telegram response:', parseErr);
        return res.status(200).json({
          success: true,
          message: 'Telegram response received but could not be parsed',
        });
      }

      if (!telegramResult.ok || !telegramResult.result?.message_id) {
        console.warn('Invalid Telegram response structure:', telegramResult);
        return res.status(200).json({
          success: true,
          message: 'Telegram API responded but with unexpected format',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Telegram notification sent successfully',
        messageId: telegramResult.result.message_id,
      });

    } catch (error) {
      if (error.name === 'AbortError') {
        console.warn('Telegram notification timeout');
      } else {
        console.error('Telegram fetch error:', error.message);
      }
      
      return res.status(200).json({
        success: true,
        message: 'Form processed but Telegram notification error occurred',
        details: error.name === 'AbortError' ? 'Request timeout' : error.message,
      });
    }
}
