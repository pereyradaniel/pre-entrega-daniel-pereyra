import './App.css';
import './components/NavBar/NavBar';
import './components/ItemListContainer/ItemListContainer';

import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className='header'>
      <NavBar/>
      </header>
      <ItemListContainer greeting="Curso React"/>
    </div>
  );
}

export default App;
