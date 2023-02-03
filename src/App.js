import { ThemeProvider } from '@fluentui/react';
import 'App.css';
import { Accessibility, Background, Copy } from 'components/Meta.tsx';
import { NavBar } from 'components/NavBar.tsx';
import { Title } from 'components/Title.tsx';
import React from 'react';
import { MainContent } from 'components/MainContent.jsx';
import { themeDark } from 'components/Theme.tsx';
import { Grid } from 'fluentui-react-grid';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Title />
        <ThemeProvider theme={themeDark}>
          <Grid dir="ltr">
            <Grid.Row>
              <Grid.Col sizeSm={6} sizeMd={4} sizeLg={2}>
                <NavBar />
              </Grid.Col>
              <Grid.Col sizeSm={6} sizeMd={8} sizeLg={10}>
                <MainContent />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </ThemeProvider>
        <Copy />
        <Accessibility />
        <Background />
      </div>
    </React.StrictMode>
  );
}

export default App;
