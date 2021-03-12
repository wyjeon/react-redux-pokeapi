import React from 'react';
import usePoke from '../hooks/usePoke';

function PokeImage() {
  const { pokeReducer } = usePoke();

  return (
    <div class="ui four doubling cards">
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.front_default} />
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.back_default} />
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.front_shiny} />
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.back_shiny} />
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.front_female} />
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.back_female} />
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.front_shiny_female} />
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={pokeReducer.pokemon?.sprites.back_shiny_female} />
        </div>
      </div>
    </div>
  );
}

export default PokeImage;
