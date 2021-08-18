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
import BarChartIcon from '@material-ui/icons/BarChart';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import ApartmentIcon from '@material-ui/icons/Apartment';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const CardItem: React.FC = () => {
  return (
    <article>
      <Grid container spacing={2} direction="column">
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="h4">Nombre de la propiedad</Typography>
            <Typography variant="body1">Descripción de la propiedad</Typography>
            <Typography variant="body1">
              Tipo de propiedad: Apartamento
            </Typography>
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
            <Grid item xs={3} container direction="column" alignItems="center">
              <BarChartIcon />
              <Typography variant="body2">Estrato</Typography>
              <Typography variant="h6">3</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography variant="h5">Detalles</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container spacing={2} justify="flex-start">
            <Grid item xs={3} container direction="column" alignItems="center">
              <HotelIcon />
              <Typography variant="body2">Habitaciones</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems="center">
              <BathtubIcon />
              <Typography variant="body2">Baños</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems="center">
              <DriveEtaIcon />
              <Typography variant="body2">Parqueaderos</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems="center">
              <AirlineSeatReclineNormalIcon />
              <Typography variant="body2">Estudio</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems="center">
              <ApartmentIcon />
              <Typography variant="body2">Niveles</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs>
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} container direction="column" alignItems="center">
              <BusinessCenterIcon fontSize="large" />
              <Typography variant="h5">Administración</Typography>
              <Typography variant="h6">$ 0</Typography>
            </Grid>
            <Grid item xs={3} container direction="column" alignItems="center">
              <AttachMoneyIcon fontSize="large" />
              <Typography variant="h5">Valor</Typography>
              <Typography variant="h6">$ 0</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
};

export default CardItem;
