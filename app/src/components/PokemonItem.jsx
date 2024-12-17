import {React} from 'react';
import PropTypes from 'prop-types';
import { usePokemonSprite } from '../hooks/fetchData.js';

function PokemonItem({name, url}){
	const {sprite, loading} = usePokemonSprite(url);
	if (loading){
		return (
			<p key={name} className="text-neutral-300 justify-center bold">Loading...</p>
		);
	}

	return (
		<div key={name}>
				<img className = 'w-24 sm:w-32 md:w-40 lg:w-48 xl:w-64 bg-slate-100 rounded-2xl mx-2 text-black' src = {sprite} alt = "Foto de Pokemon"></img>
				<p className='text-black text-center font-bold'> {name}</p>
		</div>
	);
}

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired,  
  url: PropTypes.string.isRequired, 
};

export default PokemonItem;