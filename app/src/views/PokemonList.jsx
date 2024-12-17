import {React} from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../components/PokemonItem';
import { usePokemonSample } from '../hooks/fetchData.js';


function PokemonList({currentPage}){
	const {data, loading} = usePokemonSample();

	if (loading){
		return (<p className="text-black">Loading...</p>);
	};

  const itemsPerPage = 30;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pokemonForPage = data.slice(startIndex, endIndex);

	return (
		<>
			<div className='max-w-fit rounded-lg overflow-hidden bg-white mx-auto mt-6 p-2'>
				<div className = 'grid grid-cols-5'>
          {pokemonForPage.map((pokemon) => (
            <PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
				</div>
			</div>
		</>
	);
}

//Validations
PokemonList.propTypes = {
	pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  	).isRequired,
	  currentPage: PropTypes.number.isRequired,
};

export default PokemonList;