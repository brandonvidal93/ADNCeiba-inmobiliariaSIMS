import React, { useContext, useState, useEffect } from 'react';
import currencyFormatter from 'currency-formatter';

// Models
import { ItemModel } from 'pages/Main/models/ItemModel';

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

const CardItem: React.FC<ItemModel> = ({
  id,
  type,
  totalArea,
  builtArea,
  antique,
  levelId,
  ubication,
  address,
  rooms,
  office,
  bathrooms,
  garages,
  floors,
  price,
  priceDiscount,
  priceAdmon,
  pricePolicy,
  imgCover,
  descripcion,
}) => {
  const {
    mutations: { toggleDialog },
  } = useContext(DialogContext);

  const handleClickOpen = () => {
    toggleDialog(true);
  };

  const [ubicationItem, setUbicationItem] = useState(['']);

  useEffect(() => {
    setUbicationItem(ubication.split('_'));
  }, [ubication]);

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid container direction="column" className={classes.paper}>
        <Grid item className={classes.imgContainer} onClick={handleClickOpen}>
          <BuildImage cover={imgCover} className={classes.img} />
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="h6">
            {type === 1 ? 'Apartamento' : 'Casa'} - {id}
          </Typography>
          <Typography variant="body1">Sector {ubicationItem[2]}</Typography>
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
