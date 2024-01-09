import React, { useEffect, useState } from 'react';
/* import InstallButton from './InstallButton'; */

const Home: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      // Prevent the default behavior to stop the browser from showing the prompt
      event.preventDefault();

      // Store the event to trigger the installation later
      setDeferredPrompt(event);
    };

    // Add the event listener when the component mounts
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    // Check if the deferredPrompt is available
    if (deferredPrompt) {
      // Trigger the installation prompt
      (deferredPrompt as any).prompt();

      // Wait for the user to respond to the prompt
      (deferredPrompt as any).userChoice
        .then((choiceResult: { outcome: 'accepted' | 'dismissed' }) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the installation');
          } else {
            console.log('User dismissed the installation');
          }
        });

      // Reset the deferredPrompt
      setDeferredPrompt(null);
    }
  };

  return (
    <div>
      {/* Your other components and content */}
      <button onClick={handleInstallClick} >Install</button>
    </div>
  );
};

export default Home;
