import React from 'react';
import { Typography } from '@material-ui/core';

// Components
import BuildingCard from 'pages/Main/components/Cards/BuildingCard';

const BuildingContainer: React.FC = () => {
  return (
    <>
      <Typography variant="h3" align="center">
        Propiedades
      </Typography>
      <BuildingCard />
    </>
  );
};

export default BuildingContainer;
