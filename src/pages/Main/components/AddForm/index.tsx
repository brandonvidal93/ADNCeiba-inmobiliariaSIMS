import React from 'react';

// Material
import { Container, Grid, TextField, Button } from '@material-ui/core';

// Components
import SelectBuildType from 'pages/Main/components/FormComponents/SelectBuildType';
import SelectAntiqueType from 'pages/Main/components/FormComponents/SelectAntique';
import SliderLevel from 'pages/Main/components/FormComponents/SliderLevel';
import SelectUbication from 'pages/Main/components/FormComponents/SelectUbication';
import InputNumber from 'pages/Main/components/FormComponents/InputNumber';
import InputTextField from 'pages/Main/components/FormComponents/InputTextField';

// Styles
import { useStyles } from './styles';

const AddForm: React.FC = () => {
  const classes = useStyles();

  // function sumbit data form
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
  };

  return (
    <form
      noValidate
      autoComplete="on"
      className={classes.form}
      onSubmit={handleOnSubmit}
    >
      <Container maxWidth="md" disableGutters>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={5}>
            <SelectBuildType />
          </Grid>
          <Grid item xs={6}>
            <Grid container justify="space-between">
              <Grid item xs={5}>
                <InputTextField id="totalArea" label="Área total" isRequired />
              </Grid>
              <Grid item xs={5}>
                <InputTextField
                  id="builtArea"
                  label="Área construida"
                  isRequired
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={5}>
            <SelectAntiqueType />
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={6}>
                <SliderLevel />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={5}>
            <SelectUbication />
          </Grid>
          <Grid item xs={6}>
            <InputTextField id="address" label="Dirección" isRequired />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="space-between"
          className={classes.gridContainer2}
        >
          <Grid item xs={4}>
            <InputNumber title="Habitaciones" idValue="rooms" isRequired />
          </Grid>
          <Grid item xs={4}>
            <InputNumber title="Baños" idValue="bathrooms" isRequired />
          </Grid>
          <Grid item xs={4}>
            <InputNumber title="Estudios" idValue="office" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="flex-start"
          className={classes.gridContainer}
        >
          <Grid item xs={4}>
            <InputNumber title="Parqueaderos" idValue="garages" />
          </Grid>
          <Grid item xs={4}>
            <InputNumber title="Niveles" idValue="floors" isRequired />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={3}>
            <InputTextField id="price" label="Valor del inmueble" isRequired />
          </Grid>
          <Grid item xs={3}>
            <InputTextField
              id="priceDiscount"
              label="Valor de venta"
              isRequired
            />
          </Grid>
          <Grid item xs={3}>
            <InputTextField id="priceAdmon" label="Administración" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={3}>
            <InputTextField id="pricePolicy" label="Seguro de vivienda" />
          </Grid>
          <Grid item xs={8}>
            <InputTextField
              id="imgCover"
              label="URL imagen de la Propiedad"
              isRequired
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="descripcion"
              label="Descripción"
              multiline
              rows={7}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.gridContainer3}>
          <Grid item xs>
            <Button type="submit" variant="contained" color="primary">
              GUARDAR
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default AddForm;
