import { useState, useEffect } from 'react';

const base_url = 'https://pokeapi.co/api/v2/';

export function usePokemonSample() {
  const url = base_url + 'pokemon?limit=150';  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((dataFetched) => {
        setData(dataFetched.results);
      })  
      .finally(() => setLoading(false));
  }, []);  

  return { data, loading };
}
export function usePokemonSprite(url){
  const [sprite, setSprite] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true); 
    fetch(url)
      .then((response) => response.json())
      .then((dataFetched) => {
        setSprite(dataFetched.sprites.front_default);
      })  
      .finally(() => setLoading(false));
  }, []);

  return {sprite, loading};
}