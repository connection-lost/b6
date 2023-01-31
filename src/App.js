import { ThemeProvider } from '@fluentui/react';
import './App.css';
import { Accessibility, Background, Copy } from './components/Meta.tsx';
import { NavBar } from './components/NavBar.tsx';
import { Title } from './components/Title.tsx';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme='themeDark'>
        <Title />
        <NavBar />
        <Copy />
        <Accessibility />
        <Background />
      </ThemeProvider>
    </div>
  );
}

export default App;
