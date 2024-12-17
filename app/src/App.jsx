import { React  } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import PokemonList from './views/PokemonList.jsx';


function App() {
  const pokemonData = [
    { name: 'Pikachu', imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { name: 'Bulbasaur', imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { name: 'Charmander', imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  ];
  return (
    <>
    <BrowserRouter>
      <div className='flex items-center justify-between bg-red-700 p-4'>
        
        <div className="flex items-center space-x-4">
          <img className="p-2 sm:w-1/2 md:w-1/4 lg:w-1/6" src="./src/assets/pokemon-logo.png" alt="Pokemon Logo" />
          <h1 className="text-3xl text-white">Pokedex</h1>
        </div>
      
        <div className="flex items-center space-x-4">
          <Link to='/home' className="text-white text-xl">Home</Link>
          <input className="p-2 rounded-md" type="text" placeholder="Search" />
        </div>
      </div>
      <PokemonList  pokemonList={pokemonData}/>
    </BrowserRouter>
    </>
  );
}

export default App;
