import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Page, Button, Toolbar, BottomToolbar, ToolbarButton, Toast, Card, Splitter, SplitterSide, List, ListItem, SplitterContent } from 'react-onsenui';
import ons from 'onsenui';
import ReloadPrompt from './components/ReloadPrompt';


export default function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);


  let alert = () => {
    ons.notification.alert("Hello");
  };

  let toast = () => {
    setOpenPopup(!openPopup);
  };

  let onCloseMenu = () => {
    setOpenMenu(false);
  };

  let onShowMenu = () => {
    setOpenMenu(true);
  };


  return (

    <Splitter>
      <SplitterSide
        style={{
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        }}
        width={"200px"}
        side='left'
        collapse={true}
        swipeable={true}
        isOpen={openMenu}
        onPostClose={onCloseMenu}
        onPostOpen={onShowMenu}
      >
        <Page>
          <List
            dataSource={["A", "B", "C"]}
            renderRow={(title) => (
              <ListItem key={title}>{title}</ListItem>
            )}>
          </List>
        </Page>
      </SplitterSide>

      <SplitterContent>

        <Page
          renderToolbar={
            () =>
              <Toolbar>
                <div className='left'>
                  <ToolbarButton onClick={onShowMenu} >Menu</ToolbarButton>
                </div>
                <div className='center'>Top toolbar</div>
                {/* <div className='right'>
              <ToolbarButton >Toolbar button</ToolbarButton>
            </div> */}
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
      </SplitterContent>
    </Splitter>

  );
}
