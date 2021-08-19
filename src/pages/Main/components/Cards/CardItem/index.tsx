import React from 'react';
import currencyFormatter from 'currency-formatter';
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

// Components
import { BuildImage } from 'pages/Main/components/BuildingImage';
import { useStyles } from './styles';

const CardItem: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Grid container direction="column" className={classes.paper}>
        <Grid item className={classes.imgContainer}>
          <BuildImage
            cover="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            className={classes.img}
          />
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="h6">Nombre de la propiedad</Typography>
          <Typography variant="body1">Sector</Typography>
        </Grid>
        <Grid container justify="space-around">
          <Grid item xs={3} className={classes.itemDetail}>
            <SquareFootIcon color="primary" />
            <Typography variant="body1">0</Typography>
          </Grid>
          <Grid item xs={3} className={classes.itemDetail}>
            <HotelIcon color="primary" />
            <Typography variant="body1">0</Typography>
          </Grid>
          <Grid item xs={3} className={classes.itemDetail}>
            <BathtubIcon color="primary" />
            <Typography variant="body1">0</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="h6" align="center" color="primary">
            {currencyFormatter.format(90000000, { code: 'USD' })}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardItem;
