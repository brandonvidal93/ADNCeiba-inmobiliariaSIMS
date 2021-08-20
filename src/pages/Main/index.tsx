import React from 'react';
import { Container } from '@material-ui/core';
import { BuildingProvider } from './context/BuildingContext';
// Components
import BuildingContainer from './containers/BuildingContainer';

const Main: React.FC = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <BuildingProvider>
        <BuildingContainer />
      </BuildingProvider>
    </Container>
  );
};

export default Main;
