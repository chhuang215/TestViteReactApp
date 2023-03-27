import React from 'react';
import { Dialog, Button, Card } from 'react-onsenui';
import { useRegisterSW } from 'virtual:pwa-register/react';

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <Dialog isOpen={offlineReady || needRefresh}>
      <Card>

        {offlineReady
          ? <span>App ready to work offline</span>
          : <span>New content available, click on reload button to update.</span>
        }
        {needRefresh && <Button onClick={() => updateServiceWorker(true)}>Reload</Button>}
        <Button onClick={() => close()}>Close</Button>

      </Card>
    </Dialog>
  );

}

