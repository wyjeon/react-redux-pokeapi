import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokeData } from '../modules/pokeReducer';

function usePoke() {
  const [pokeName, setPokeName] = useState('');
  const pokeReducer = useSelector(state => state.pokeReducer);
  const dispatch = useDispatch();

  const searchPoke = () => {
    dispatch(fetchPokeData(pokeName));
  };

  const handlePokeName = e => {
    setPokeName(e.target.value.toLowerCase());
  };
  return {
    pokeName,
    pokeReducer,
    searchPoke,
    handlePokeName,
  };
}

export default usePoke;
