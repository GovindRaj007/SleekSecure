/**
 * Google Tag Manager Tracking Utility
 * Tracks WhatsApp, Call, and other important user interactions
 */

interface GTMEvent {
  event: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Push event to GTM dataLayer
 */
export const pushGTMEvent = (eventData: GTMEvent) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(eventData);
  }
};

/**
 * Track WhatsApp link clicks
 */
export const trackWhatsAppClick = (
  location: string = 'general',
  source: string = 'button'
) => {
  pushGTMEvent({
    event: 'whatsapp_click',
    location: location,
    source: source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track Phone call link clicks
 */
export const trackCallClick = (
  location: string = 'general',
  source: string = 'button'
) => {
  pushGTMEvent({
    event: 'call_click',
    location: location,
    source: source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (
  formName: string,
  source: string = 'contact_form'
) => {
  pushGTMEvent({
    event: 'form_submission',
    form_name: formName,
    source: source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track page views (enhanced)
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  pushGTMEvent({
    event: 'page_view',
    page_title: pageTitle,
    page_path: pagePath,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Create WhatsApp link with tracking
 */
export const createTrackedWhatsAppLink = (
  whatsappNumber: string,
  message: string,
  location: string = 'general'
): { href: string; onClick: () => void } => {
  return {
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    onClick: () => trackWhatsAppClick(location),
  };
};

/**
 * Create call link with tracking
 */
export const createTrackedCallLink = (
  phoneNumber: string,
  location: string = 'general'
): { href: string; onClick: () => void } => {
  return {
    href: `tel:${phoneNumber}`,
    onClick: () => trackCallClick(location),
  };
};
