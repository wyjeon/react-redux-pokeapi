import React from 'react';
import usePoke from '../hooks/usePoke';

function PokeInfoStats() {
  const { pokeReducer } = usePoke();

  return (
    <div>
      {pokeReducer.pokemon?.stats.map(stat => {
        return (
          <div>
            {stat.stat.name}: {stat.base_stat}
          </div>
        );
      })}
    </div>
  );
}

export default PokeInfoStats;
