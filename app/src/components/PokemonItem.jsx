import {React} from 'react';
import PropTypes from 'prop-types';
import { usePokemonSprite, usePokemonId } from '../hooks/fetchData.js';

function PokemonItem({name, url, onClick}){
	const {sprite, loading} = usePokemonSprite(url);
	const {id, loading_id} = usePokemonId(url);
	if (loading || loading_id){
		return (
			<p key={name} className="text-black font-bold text-center">Loading...</p>
		);
	}

	const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
	return (
		<div key={name} onClick={() => onClick(id)} className='cursor-pointer'>
				<img className = 'w-24 sm:w-32 md:w-40 lg:w-48 xl:w-64 bg-slate-100 rounded-2xl mx-2 text-black' src = {sprite} alt = "Foto de Pokemon"></img>
				<p className='text-black text-center font-bold'> {capitalizedName}</p>
		</div>
	);
}

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired,  
  url: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired,
};

export default PokemonItem;