import { React , useState } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import { usePokemonSample } from './hooks/fetchData.js';
import PokemonList from './views/PokemonList.jsx';



function App() {
  const {data, loading} = usePokemonSample();
  const [page, setPage] = useState(1);


  const previousPage = () =>{
    if (page>1){
      setPage(page-1);
    }
    console.log(page);
  };
  const nextPage = () =>{
    if (page<5){
      setPage(page+1);
    }
    console.log(page);
  };

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
      <div>
        {loading && <p className="text-white">Loading...</p>}
        {data && <PokemonList pokemonList={data} currentPage = {page} />}
      </div>
      <div className="flex justify-center my-4 gap-20">
        <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded" onClick = {previousPage} hidden={page === 1}>Prev</button>
        <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded" onClick = {nextPage} hidden={page === 5}>Next</button>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
