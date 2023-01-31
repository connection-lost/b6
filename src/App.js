import './App.css';
import { Accessibility, Background, Copy } from './components/Meta.tsx';
import { NavBar } from './components/NavBar.tsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <Copy />
      <Accessibility />
    </div>
  );
}

export default App;
