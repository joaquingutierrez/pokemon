import './App.css';
import { Pokedex, WhosThat } from './componentsContainer';

function App() {
  return (
    <Pokedex screen1={<WhosThat />} />
  );
}

export default App;
