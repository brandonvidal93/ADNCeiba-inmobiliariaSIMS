import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';

// Context
import { BuildingContext } from 'pages/Main/context/BuildingContext';

// Models
import { ItemModel } from 'pages/Main/models/ItemModel';

// Components
import BuildingCard from 'pages/Main/components/Cards/BuildingCard';

// Styles
import { useStyles } from './styles';

const BuildingContainer: React.FC = () => {
  const {
    data: { allBuildings },
  } = useContext(BuildingContext);
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" align="center">
        Propiedades
      </Typography>
      <Grid container spacing={3} className={classes.itemContainer}>
        {allBuildings &&
          allBuildings.items.map((building: ItemModel) => (
            <BuildingCard key={building.id} item={building} />
          ))}
      </Grid>
    </>
  );
};

export default BuildingContainer;
