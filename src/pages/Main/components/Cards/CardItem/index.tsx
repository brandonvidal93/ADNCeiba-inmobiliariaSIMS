import React, { useContext } from 'react';
import currencyFormatter from 'currency-formatter';

// Context
import { DialogContext } from 'pages/Main/context/DialogContext';

// Material
import { Grid, Typography } from '@material-ui/core';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';

// Components
import { BuildImage } from 'pages/Main/components/BuildingImage';
import { useStyles } from './styles';

export interface CardItemProps {
  id: number;
  typeName: string;
  typeId: number;
  totalArea: number;
  ubicationName: string;
  ubicationId: number;
  rooms: number;
  bathrooms: number;
  price: number;
  priceDiscount: number;
  imgCover: string;
}

const CardItem: React.FC<CardItemProps> = ({
  id,
  typeName,
  typeId,
  totalArea,
  ubicationName,
  ubicationId,
  rooms,
  bathrooms,
  price,
  priceDiscount,
  imgCover,
}) => {
  const {
    mutations: { toggleDialog },
  } = useContext(DialogContext);

  const handleClickOpen = () => {
    toggleDialog(true);
  };

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid container direction="column" className={classes.paper}>
        <Grid item className={classes.imgContainer} onClick={handleClickOpen}>
          <BuildImage cover={imgCover} className={classes.img} />
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="h6">
            {typeName} - {id}
          </Typography>
          <Typography variant="body1">Sector: {ubicationName}</Typography>
        </Grid>
        <Grid container justifyContent="space-around">
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
