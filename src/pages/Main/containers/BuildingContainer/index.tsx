import React from 'react';
import {
  Button,
  ButtonBase,
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';

// Components
import BuildingCard from 'pages/Main/components/Cards/BuildingCard';

const BuildingContainer: React.FC = () => {
  return (
    <>
      <Typography variant="h3" align="center">
        Propiedades
      </Typography>
      <Grid container spacing={3}>
        <BuildingCard />
      </Grid>
    </>
  );
};

export default BuildingContainer;
