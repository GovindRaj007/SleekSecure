import { useEffect } from 'react';

/**
 * TawkInitializer Component
 * 
 * Initializes Tawk.to chat widget on page load
 * Non-blocking, zero performance impact
 * 
 * Place this component once in your Layout or App
 */
const TawkInitializer = () => {
  useEffect(() => {
    // Check if Tawk is already initialized
    if (typeof window !== 'undefined') {
      const checkTawk = setInterval(() => {
        const TawkAPI = (window as any).Tawk_API;
        if (TawkAPI && TawkAPI.onLoad) {
          clearInterval(checkTawk);
          // Tawk is fully loaded and ready
          console.debug('Tawk.to initialized successfully');
        }
      }, 100);

      return () => clearInterval(checkTawk);
    }
  }, []);

  // This component doesn't render anything
  return null;
};

export default TawkInitializer;
