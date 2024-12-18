import {React, useState } from 'react';
import PokemonItem from '../components/PokemonItem';
import { useNavigate } from 'react-router-dom';
import { usePokemonSample } from '../hooks/fetchData.js';


function PokemonList(){
	const {data, loading} = usePokemonSample();
	const [currentPage, setPage] = useState(1);
	const navigate = useNavigate();
	
	//Functions to handle logic
	const previousPage = () =>{
		if (currentPage>1){
			setPage(currentPage-1);
		}
	};
	const nextPage = () =>{
		if (currentPage<5){
			setPage(currentPage+1);
		}
	};
	const viewInfo = (id) =>{
		navigate(`/info/${id}`);
	};

	if (loading){
		return (<p className="text-black font-bold text-center">Loading...</p>);
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
					<PokemonItem key={pokemon.name} name={pokemon.name} url={pokemon.url} onClick={viewInfo}/>
				))}
				</div>
			</div>
			<div className="flex justify-center my-4 gap-20">
        <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded" onClick = {previousPage} hidden={currentPage === 1}>Prev</button>
        <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded" onClick = {nextPage} hidden={currentPage === 5}>Next</button>
      </div>
		</>
	);
}

//Validations
export default PokemonList;