import { React} from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonData, usePokemonSprite } from '../hooks/fetchData';


function PokemonInfo(){
    const { id } = useParams();
    const {data, loading} = usePokemonData(id);
    const sprite_url = `https://pokeapi.co/api/v2/pokemon/`+id;
    const {sprite, loading_sprite} = usePokemonSprite(sprite_url);

    if (loading || loading_sprite){
			return (<p className="text-black">Loading...</p>);
		};

		const capitalize = (word) =>{
			return word.charAt(0).toUpperCase() + word.slice(1);
		};
		//Html Variables

		const capitalizedName = capitalize(data.name);
    return (
        <div className='max-w-fit rounded-lg overflow-hidden bg-white mx-auto mt-6 p-2'>
					<h1 className='text-black text-center font-bold text-4xl p-10'> {capitalizedName}</h1>
            <div className='flex flex-wrap'>
							<div>
								<img className = 'object-contain w-24 sm:w-32 md:w-64 lg:w-64 xl:w-64 bg-slate-100 rounded-2xl mx-2 text-black' src = {sprite} alt = "Foto de Pokemon"></img>
							</div>
							<div>
								<div className='flex flex-wrap gap-10 bg-teal-400 rounded-md'>
									<div className='p-6'>
										<h1 className='text-center font-bold text-2xl'>Height</h1>
										<p className='text-black text-center font-bold text-2xl '>{data.height / 10} m</p>
									</div>
									<div className='p-6'>
										<h1 className='text-center font-bold text-2xl'>Weight</h1>
										<p className='text-black text-center font-bold text-2xl '>{data.weight / 10 } Kg</p>
									</div>
								</div>
								<div>
									<h1 className='text-black font-bold text-2xl p-2'>Type</h1>
									<div className='flex flex-wrap p-2'>
										{data.types.map((type, index) => (
											<p className= 'text-black text-center font-bold rounded-md bg-blue-100 px-2 py-1 mx-2' key={index}>{type.type.name}</p>
										))}
									</div>
								</div>
							</div>
            </div>
						<div>
								<h1 className='text-black font-bold text-2xl p-2'>Abilities</h1>
								<div className='p-2'>
									{data.abilities.map((ability, index) => (
										<p className= 'text-black font-bold p-2 mx-2' key={index}>{capitalize(ability.ability.name)}</p>
									))}
								</div>
						</div>
        </div>
    );
}


export default PokemonInfo;