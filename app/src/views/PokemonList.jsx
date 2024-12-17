import {React} from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../components/PokemonItem';

function PokemonList({pokemonList}){
	
	var itemDetails = [];
	for(let i = 0; i<pokemonList.length; i++){
		itemDetails.push(PokemonItem(pokemonList[i]));
	}

	return (
		<>
			<div className='max-w-fit rounded-lg overflow-hidden bg-white'>
				<div className = 'grid grid-cols-5'>
					{itemDetails}
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
      imgSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonList;