import { ThemeProvider } from '@fluentui/react';
import './App.css';
import { Accessibility, Background, Copy } from './components/Meta.tsx';
import { NavBar } from './components/NavBar.tsx';
import { Title } from './components/Title.tsx';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <link href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/9.3.0/css/fabric.min.css" rel="stylesheet" />
        <ThemeProvider theme='themeDark'>
          <Title />
          <div class="ms-Fabric" dir="ltr">
            <div class="ms-Grid">
              <div class="ms-Grid-row">
                <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                  <NavBar />
                </div>
                <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                  <NavBar />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
        <Copy />
        <Accessibility />
        <Background />
      </div>
    </React.StrictMode>
  );
}

export default App;
