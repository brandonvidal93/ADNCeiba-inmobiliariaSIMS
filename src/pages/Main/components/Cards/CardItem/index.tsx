import React, { useState, useEffect, useContext } from 'react';
import currencyFormatter from 'currency-formatter';
// Models
import { ItemModel } from 'pages/Main/models/ItemModel';
// Context
import { BuildingContext } from 'pages/Main/context/BuildingContext';
import { DialogContext } from 'pages/Main/context/DialogContext';
// Material
import { Grid, Typography, IconButton } from '@material-ui/core';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
  priceAdmon,
  imgCover,
  descripcion,
}) => {
  const {
    methods: { deleteBuilding, buildingSet },
  } = useContext(BuildingContext);
  const {
    mutations: { toggleDialog, toggleEditMode },
  } = useContext(DialogContext);
  const [ubicationItem, setUbicationItem] = useState(['']);
  const [antiqueItem, setAntiqueItem] = useState(['']);
  const indicator0 = 0;
  const indicator1 = 1;
  const indicator2 = 2;
  const indicator3 = 0.05;

  useEffect(() => {
    setUbicationItem(ubication.split('_'));
  }, [ubication]);
  useEffect(() => {
    setAntiqueItem(antique.split('_'));
  }, [antique]);

  const nameSector = ubicationItem[indicator2];
  const priceDiscount: number =
    Number(price) - Number(price) * Number(ubicationItem[indicator0]);
  const pricePolicy: number = priceDiscount * indicator3;
  const classes = useStyles();

  const handleEdit = () => {
    buildingSet({
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
      priceAdmon,
      imgCover,
      descripcion,
    });
    toggleDialog(true);
    toggleEditMode(true);
  };

  const handleDelete = () => {
    deleteBuilding(id);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid container direction="column" className={classes.paper}>
        <Grid item className={classes.imgContainer}>
          <BuildImage cover={imgCover} className={classes.img} />
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="h6">
            {Number(type) === indicator1 ? 'Apartamento' : 'Casa'} - {id}
          </Typography>
          <Typography variant="body1">
            <b>Sector:</b> {nameSector}
          </Typography>
          <Typography variant="body1">
            <b>Estrato:</b> {levelId}
          </Typography>
          <Typography variant="body1">
            <b>Antigüedad:</b> {antiqueItem[1]}
          </Typography>
          <Typography variant="body1">
            <b>Niveles:</b> {floors}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          className={classes.separator}
        >
          <Grid item xs={4} className={classes.itemDetail}>
            <SquareFootIcon color="primary" />
            <Typography variant="body1">
              {totalArea} m<sup>2</sup>
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.itemDetail}>
            <HotelIcon color="primary" />
            <Typography variant="body1">{rooms}</Typography>
          </Grid>
          <Grid item xs={4} className={classes.itemDetail}>
            <BathtubIcon color="primary" />
            <Typography variant="body1">{bathrooms}</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-around">
          <Grid item xs={4} className={classes.itemDetail}>
            <BorderAllIcon color="primary" />
            <Typography variant="body1">
              {builtArea} m<sup>2</sup>
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.itemDetail}>
            <AirlineSeatReclineNormalIcon color="primary" />
            <Typography variant="body1">{office}</Typography>
          </Grid>
          <Grid item xs={4} className={classes.itemDetail}>
            <DriveEtaIcon color="primary" />
            <Typography variant="body1">{garages}</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.infoContainer}>
          <Typography variant="body1">
            <b>Seguro vivienda: </b>
            {currencyFormatter.format(
              Number(antiqueItem[0]) > indicator1 ? pricePolicy : 0,
              {
                code: 'USD',
              },
            )}
          </Typography>
          <Typography variant="body1">
            <b>Administración: </b>
            {currencyFormatter.format(Number(priceAdmon), {
              code: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" align="center">
            Antes: <del>{currencyFormatter.format(price, { code: 'USD' })}</del>
          </Typography>
          <Typography variant="h6" align="center" color="primary">
            <b>Ahora: </b>
            {currencyFormatter.format(priceDiscount, {
              code: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid
          container
          item
          className={classes.separator}
          justifyContent="space-evenly"
        >
          <IconButton
            aria-label="edit"
            onClick={handleEdit}
            id={`btnEdit-${id}`}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={handleDelete}
            id={`btnDelete-${id}`}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardItem;
