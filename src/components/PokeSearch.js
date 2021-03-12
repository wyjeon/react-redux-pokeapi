import React from 'react';
import usePoke from '../hooks/usePoke';
import { Input, Button, Segment, Divider, Form } from 'semantic-ui-react';

function PokeSearch() {
  const { handlePokeName, searchPoke } = usePoke();

  return (
    <Segment basic textAlign="center">
      <Form>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          onChange={handlePokeName}
        />
        <Button primary onClick={searchPoke}>
          Search
        </Button>
      </Form>
      <Divider horizontal>Poké</Divider>
    </Segment>
  );
}

export default PokeSearch;
