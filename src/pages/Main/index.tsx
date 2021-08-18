import React from 'react';
import { Container } from '@material-ui/core';
// Components
import MenuContainer from './containers/MenuContainer';
import BuildingContainer from './containers/BuildingContainer';

const Main: React.FC = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <MenuContainer />
      <div>
        <BuildingContainer />
      </div>
    </Container>
  );
};

export default Main;
