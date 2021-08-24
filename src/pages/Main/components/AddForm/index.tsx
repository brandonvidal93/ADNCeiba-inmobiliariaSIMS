import React from 'react';

// Material
import { Grid } from '@material-ui/core';

const AddForm: React.FC = () => {
  return (
    <form noValidate autoComplete="on">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          Tipo Propiedad
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              Área total
            </Grid>
            <Grid item xs={6}>
              Área construida
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          Antigüedad
        </Grid>
        <Grid item xs={6}>
          Estrato
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          Sector
        </Grid>
        <Grid item xs={6}>
          Dirección
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Habitaciones
        </Grid>
        <Grid item xs={4}>
          Baños
        </Grid>
        <Grid item xs={4}>
          Estudios
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Parqueaderos
        </Grid>
        <Grid item xs={4}>
          Niveles
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Valor inmueble
        </Grid>
        <Grid item xs={4}>
          Valor de venta
        </Grid>
        <Grid item xs={4}>
          Administración
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          Seguro de vivienda
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>Descripción</Grid>
      </Grid>
    </form>
  );
};

export default AddForm;
