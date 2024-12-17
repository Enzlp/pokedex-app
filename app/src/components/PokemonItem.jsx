import {React} from 'react';
import PropTypes from 'prop-types';

function PokemonItem({name, imgSrc}){
	return (
		<div>
				<img src = {imgSrc} alt = "Foto Pokemon"></img>
				<h2 className='text-black'> {name}</h2>
		</div>
	);
}

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired,  
  imgSrc: PropTypes.string.isRequired, 
};

export default PokemonItem;