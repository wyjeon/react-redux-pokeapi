import React from 'react';
import usePoke from '../hooks/usePoke';

function PokeCategory() {
  const { pokeReducer } = usePoke();

  return (
    <div>
      {pokeReducer.pokemon?.types.map(type => {
        return <div>{type.type.name}</div>;
      })}
    </div>
  );
}

export default PokeCategory;
