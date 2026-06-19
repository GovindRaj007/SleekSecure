/**
 * Google Tag Manager Tracking Utility
 * Tracks WhatsApp, Call, and other important user interactions
 * 
 * Events are pushed to window.dataLayer where GTM Console captures them
 * Requires: GTM triggers and tags configured in Google Tag Manager console
 */

interface GTMEvent {
  event: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Push event to GTM dataLayer
 * Events are immediately available in Tag Assistant for debugging
 */
export const pushGTMEvent = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined') {
    // Initialize dataLayer if it doesn't exist
    if (!(window as any).dataLayer) {
      (window as any).dataLayer = [];
      console.log('[GTM] dataLayer initialized');
    }
    
    // Push event with timestamp if not already provided
    const eventWithTimestamp = {
      ...eventData,
      timestamp: eventData.timestamp || new Date().toISOString(),
    };
    
    (window as any).dataLayer.push(eventWithTimestamp);
    
    // ALWAYS log in console (not just dev) - critical for debugging production issues
    console.log('[GTM Event Pushed to dataLayer]', eventWithTimestamp);
  } else {
    console.error('[GTM] window object not available');
  }
};

/**
 * Track WhatsApp link clicks
 * @param location - Where the click occurred (e.g., 'hero_section', 'navbar', 'footer')
 * @param source - Button identifier (e.g., 'whatsapp_button', 'get_free_quote_button')
 */
export const trackWhatsAppClick = (
  location: string = 'general',
  source: string = 'button'
) => {
  pushGTMEvent({
    event: 'click_tracking',
    click_type: 'whatsapp',
    location: location,
    source: source,
  });
};

/**
 * Track Phone call link clicks
 * @param location - Where the click occurred (e.g., 'navbar', 'footer', 'contact_page')
 * @param source - Button identifier (e.g., 'call_button', 'phone_link')
 */
export const trackCallClick = (
  location: string = 'general',
  source: string = 'button'
) => {
  pushGTMEvent({
    event: 'click_tracking',
    click_type: 'call',
    location: location,
    source: source,
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form (e.g., 'contact_form', 'quote_request')
 * @param source - Where form is located (e.g., 'contact_page', 'sidebar')
 */
export const trackFormSubmission = (
  formName: string,
  source: string = 'contact_form'
) => {
  pushGTMEvent({
    event: 'form_submission',
    form_name: formName,
    source: source,
  });
};

/**
 * Track page views with custom metadata
 * @param pageTitle - Page title
 * @param pagePath - Page path (e.g., '/about', '/services')
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  pushGTMEvent({
    event: 'page_view',
    page_title: pageTitle,
    page_path: pagePath,
  });
};
