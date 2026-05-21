/**
 * Vercel Serverless Function: Telegram Bot Notification
 * Sends contact form submissions to Telegram
 * 
 * Environment Variables Required:
 * - TELEGRAM_BOT_TOKEN: Telegram bot token
 * - TELEGRAM_CHAT_ID: Telegram chat/channel ID for receiving notifications
 */

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract form data from request body
    const { name, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !phone || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate phone number format (10 digits)
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 10) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    // Check environment variables
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Format Telegram message with professional styling
    let telegramMessage = `🔥 New Website Lead

👤 Name: ${name}

📞 Phone: ${phone}

🛠️ Service: ${service}`;

    // Only add message section if message is provided
    if (message && message.trim()) {
      telegramMessage += `

📝 Message:
${message}`;
    }

    // Send message to Telegram using Telegram Bot API
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML', // Allow basic HTML formatting if needed in future
      }),
    });

    // Check if Telegram API request was successful
    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.json();
      console.error('Telegram API error:', telegramError);
      return res.status(500).json({ 
        error: 'Failed to send notification',
        details: telegramError.description 
      });
    }

    const telegramResult = await telegramResponse.json();

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been received. We will contact you shortly!',
      messageId: telegramResult.result.message_id,
    });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({
      error: 'An error occurred while processing your request',
      details: error.message,
    });
  }
}
