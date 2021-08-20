import React, { useContext, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

// Context
import { BuildingContext } from 'pages/Main/context/BuildingContext';

// Models
import { ItemModel } from 'pages/Main/models/ItemModel';

// Components
import BuildingCard from 'pages/Main/components/Cards/BuildingCard';

const BuildingContainer: React.FC = () => {
  const {
    data: { allBuildings },
  } = useContext(BuildingContext);

  console.log('BuildingContainer', allBuildings);
  console.log(typeof allBuildings);

  return (
    <>
      <Typography variant="h3" align="center">
        Propiedades
      </Typography>
      <Grid container spacing={3}>
        {allBuildings &&
          allBuildings.items.map((building: ItemModel) => (
            <BuildingCard key={building.id} />
          ))}
      </Grid>
    </>
  );
};

export default BuildingContainer;
