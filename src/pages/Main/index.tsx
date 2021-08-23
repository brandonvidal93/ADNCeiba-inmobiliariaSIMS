import React from 'react';
import { Container } from '@material-ui/core';

// Context
import { DialogProvider } from './context/DialogContext';
import { BuildingProvider } from './context/BuildingContext';

// Components
import BuildingContainer from './containers/BuildingContainer';
import MenuContainer from './containers/MenuContainer';
import DialogContainer from './containers/DialogContainer';

const Main: React.FC = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <DialogProvider>
        <BuildingProvider>
          <BuildingContainer />
          <MenuContainer />
          <DialogContainer />
        </BuildingProvider>
      </DialogProvider>
    </Container>
  );
};

export default Main;
