import './App.css';
import PokedexProvider from './components/context';
import { Pokedex, WhosThat } from './componentsContainer';

function App() {
  return (
    <PokedexProvider>
      <Pokedex screen1={<WhosThat />} />
    </PokedexProvider>
  );
}

export default App;
