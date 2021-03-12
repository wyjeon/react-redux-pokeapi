import React from 'react';
import { Card, Divider, Icon, Image, Segment } from 'semantic-ui-react';
import usePoke from '../hooks/usePoke';
import PokeCategory from './PokeCategory';
import PokeImage from './PokeImage';
import PokeInfoStats from './PokeInfoStats';

function PokeInfo() {
  const { pokeReducer } = usePoke();

  return (
    pokeReducer.success && (
      <div>
        <Card centered>
          <Image
            src={pokeReducer.pokemon?.sprites.front_default}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{pokeReducer.pokemon?.name}</Card.Header>
            <Card.Meta>
              <div className="date">#{pokeReducer.pokemon?.order}</div>
              <PokeCategory />
            </Card.Meta>
            <Card.Description>
              <div>height: {pokeReducer.pokemon?.height}</div>
              <div>weight: {pokeReducer.pokemon?.weight}</div>
            </Card.Description>
          </Card.Content>
        </Card>

        <Card centered>
          <Card.Content header="stats" />
          <Card.Content>
            <PokeInfoStats />
          </Card.Content>
        </Card>

        <Divider horizontal>Images</Divider>
        <PokeImage />
      </div>
    )
  );
}

export default PokeInfo;
