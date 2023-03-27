import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Page, Button, Toolbar, BottomToolbar, ToolbarButton, Toast, Card } from 'react-onsenui';
import ons from 'onsenui';
import ReloadPrompt from './components/ReloadPrompt';

export default function App() {
  const [openPopup, setOpenPopup] = useState(false);

  let alert = () => {
    ons.notification.alert("Hello");
  };

  let toast = () => {
    setOpenPopup(!openPopup);
  };

  return (

    <Page
      renderToolbar={
        () =>
          <Toolbar>
            {/* <div className='left'>
              <ToolbarButton >Menu</ToolbarButton>
            </div> */}
            <div className='center'>Top toolbar</div>
            <div className='right'>
              <ToolbarButton >Toolbar button</ToolbarButton>
            </div>
          </Toolbar>
      }

      renderBottomToolbar={
        () => null
        // <BottomToolbar >
        //   Bottom toolbar
        // </BottomToolbar>
      }
    >




      <Card>
        <div style={{ textAlign: "center" }}>
          <Button onClick={alert}>Alert</Button>
          <Button onClick={toast}>Toast</Button>
        </div>
      </Card>

      <Toast visible={openPopup}>
        <div className='message' style={{ textAlign: "center" }}>Hello</div>
      </Toast>

      <ReloadPrompt />

    </Page>

  );
}
