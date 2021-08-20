import React from 'react';
import currencyFormatter from 'currency-formatter';
import { Grid, Typography } from '@material-ui/core';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';

// Components
import { BuildImage } from 'pages/Main/components/BuildingImage';
import { useStyles } from './styles';

export interface CardItemProps {
  id: number;
  typeId: number;
  totalArea: number;
  ubicationId: number;
  rooms: number;
  bathrooms: number;
  price: number;
  priceDiscount: number;
  imgCover: string;
}

const CardItem: React.FC<CardItemProps> = ({
  id,
  typeId,
  totalArea,
  ubicationId,
  rooms,
  bathrooms,
  price,
  priceDiscount,
  imgCover,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid container direction="column" className={classes.paper}>
        <Grid item className={classes.imgContainer}>
          <BuildImage cover={imgCover} className={classes.img} />
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="h6">Nombre de la propiedad</Typography>
          <Typography variant="body1">Sector: {ubicationId}</Typography>
        </Grid>
        <Grid container justify="space-around">
          <Grid item xs={3} className={classes.itemDetail}>
            <SquareFootIcon color="primary" />
            <Typography variant="body1">{totalArea}</Typography>
          </Grid>
          <Grid item xs={3} className={classes.itemDetail}>
            <HotelIcon color="primary" />
            <Typography variant="body1">{rooms}</Typography>
          </Grid>
          <Grid item xs={3} className={classes.itemDetail}>
            <BathtubIcon color="primary" />
            <Typography variant="body1">{bathrooms}</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="subtitle2" align="center">
            Antes: <del>{currencyFormatter.format(price, { code: 'USD' })}</del>
          </Typography>
          <Typography variant="h6" align="center" color="primary">
            Ahora: {currencyFormatter.format(priceDiscount, { code: 'USD' })}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardItem;
