import React from 'react';
import {
  Button,
  ButtonBase,
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DateRangeIcon from '@material-ui/icons/DateRange';

const CardItem: React.FC = () => {
  return (
    <article>
      <Grid container spacing={2} direction="column">
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="h4">Nombre de la propiedad</Typography>
            <Typography variant="body1">Descripción de la propiedad</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={3} container direction="column" alignItems="center">
              <SquareFootIcon />
              <Typography variant="body2">Área total</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems="center">
              <HomeWorkIcon />
              <Typography variant="body2">Área construida</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems="center">
              <DateRangeIcon />
              <Typography variant="body2">Antigüedad</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </article>
  );
};

export default CardItem;
