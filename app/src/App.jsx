import { React} from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import PokemonList from './views/PokemonList.jsx';
import PokemonInfo from './views/PokemonInfo.jsx';

function App() {

  const performSearch = () => {
    // Changes routing to Pokeinfo with id search
  };

  return (
    <>
      <div className='flex items-center justify-between bg-red-700 p-4'>
        <div className="flex items-center space-x-4">
          <img className="p-1 sm:w-1/2 md:w-1/4 lg:w-1/6" src="../src/assets/pokemon-logo.png" alt="Pokemon Logo" />
          <h1 className="text-4xl text-white font-bold">Pokedex</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white text-xl">Home</Link>
          <input className="p-2 rounded-md"
            type="text" 
            placeholder="Search"
          />
          <button onClick={performSearch} className="text-black font-bold text-xl bg-yellow-500 rounded-md p-2">Search</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/info/:id" element={<PokemonInfo />}/>
      </Routes>
    </>
  );
}

export default App;