import { useEffect } from 'react';

interface TawkConfig {
  visitorName?: string;
  visitorEmail?: string;
  visitHash?: string;
}

/**
 * Hook to initialize Tawk.to chat widget with custom visitor data
 * Designed for zero performance impact - only initializes after page is interactive
 */
export const useTawk = (config?: TawkConfig) => {
  useEffect(() => {
    // Only initialize if Tawk_API is available (script already loaded)
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      const Tawk_API = (window as any).Tawk_API;

      // Set visitor identification if provided
      if (config?.visitorName || config?.visitorEmail) {
        Tawk_API.setAttributes(
          {
            name: config.visitorName,
            email: config.visitorEmail,
            hash: config.visitHash,
          },
          (error: any) => {
            if (!error) {
              console.debug('Tawk visitor data updated');
            }
          }
        );
      }

      // Optional: Show widget after initialization
      Tawk_API.onLoad?.(() => {
        console.debug('Tawk widget loaded');
      });

      // Optional: Hide widget on initial load (users can click button to open)
      Tawk_API.hideWidget?.();
    }
  }, [config?.visitorName, config?.visitorEmail, config?.visitHash]);
};

export default useTawk;
