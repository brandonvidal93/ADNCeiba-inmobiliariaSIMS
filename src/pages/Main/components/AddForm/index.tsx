import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';

// Material
import {
  Container,
  Grid,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from '@material-ui/core';

// Models
import { ItemModel } from 'pages/Main/models/ItemModel';

// Context
import { BuildingContext } from 'pages/Main/context/BuildingContext';
import { DialogContext } from 'pages/Main/context/DialogContext';

// Static Data
import { dataType, dataAntique, dataUbication } from 'utils/dataSelect';

// RegExp
import { numberRegex } from 'utils/text';

// Styles
import { useStyles } from './styles';

const AddForm: React.FC = () => {
  const {
    data: { building },
    methods: { addBuilding, updateBuilding },
  } = useContext(BuildingContext);

  const {
    data: { isEditMode },
    mutations: { toggleDialog, toggleEditMode },
  } = useContext(DialogContext);

  const classes = useStyles();
  const [isHouse, setIsHouse] = useState(true);

  const { handleSubmit, formState, control, errors } = useForm({
    mode: 'onChange',
  });

  const handleTypeBuilding = (event: React.ChangeEvent<{ value: unknown }>) => {
    const typeValue = Number(event.target.value as string);
    if (typeValue === 1) {
      setIsHouse(false);
    } else {
      setIsHouse(true);
    }
  };

  const onSubmit = (value: ItemModel) => {
    if (isEditMode) {
      updateBuilding(value);
    } else {
      addBuilding(value);
    }
    toggleDialog(false);
    toggleEditMode(false);
  };

  return (
    <form
      noValidate
      autoComplete="on"
      className={classes.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="space-between">
          {isEditMode && (
            <Grid item xs={12} md={12}>
              <Controller
                as={
                  <TextField
                    label="ID Propiedad"
                    disabled
                    className={classes.textField}
                    type="number"
                    inputProps={{ readOnly: true }}
                  />
                }
                control={control}
                name="id"
                id="id"
                rules={{ required: false }}
                defaultValue={building.id}
              />
            </Grid>
          )}
          <Grid item xs={12} md={5}>
            <FormControl required className={classes.formControl}>
              <InputLabel id="labelBuildType">Tipo de propiedad</InputLabel>
              <Controller
                render={({ onChange, value, name }) => (
                  <Select
                    labelId="labelBuildType"
                    id="type"
                    value={value}
                    onChange={(e) => {
                      onChange(e);
                      handleTypeBuilding(e);
                    }}
                    name={name}
                  >
                    {dataType.map((item) => (
                      <MenuItem key={item.id} value={`${item.id}`}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
                control={control}
                name="type"
                rules={{ required: true }}
                defaultValue={isEditMode ? building.type : ''}
                errors={errors.type}
              />
            </FormControl>
            <FormHelperText error={errors.type}>
              {errors.type ? 'Selecciona un tipo de propiedad' : ''}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} md={5}>
                <Controller
                  as={
                    <TextField
                      label="Área total (mt)"
                      required
                      className={classes.textField}
                    />
                  }
                  control={control}
                  name="totalArea"
                  id="totalArea"
                  rules={{ required: true, pattern: numberRegex }}
                  defaultValue={isEditMode ? building.totalArea : ''}
                  errors={errors.totalArea}
                />
                <FormHelperText error={errors.totalArea}>
                  {errors.totalArea ? 'Sólo números' : ''}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} md={5}>
                <Controller
                  as={
                    <TextField
                      label="Área construida (mt)"
                      required
                      className={classes.textField}
                    />
                  }
                  control={control}
                  name="builtArea"
                  id="builtArea"
                  rules={{ required: true, pattern: numberRegex }}
                  defaultValue={isEditMode ? building.builtArea : ''}
                  errors={errors.builtArea}
                />
                <FormHelperText error={errors.builtArea}>
                  {errors.builtArea ? 'Sólo números' : ''}
                </FormHelperText>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={5}>
            <FormControl required className={classes.formControl}>
              <InputLabel id="labelAntique">Antigüedad</InputLabel>
              <Controller
                render={({ onChange, value, name }) => (
                  <Select
                    labelId="labelAntique"
                    id="antique"
                    value={value}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    name={name}
                  >
                    {dataAntique.map((antique) => (
                      <MenuItem
                        key={antique.id}
                        value={`${antique.id}_${antique.name}`}
                      >
                        {antique.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
                control={control}
                name="antique"
                rules={{ required: true }}
                defaultValue={isEditMode ? building.antique : ''}
                errors={errors.antique}
              />
            </FormControl>
            <FormHelperText error={errors.antique}>
              {errors.antique ? 'Selecciona la antigüedad de la propiedad' : ''}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} md={5}>
                <Controller
                  as={
                    <TextField
                      label="Estrato"
                      required
                      className={classes.textField}
                      type="number"
                      inputProps={{ min: 1, max: 6 }}
                    />
                  }
                  control={control}
                  name="levelId"
                  id="levelId"
                  rules={{ required: true, pattern: numberRegex }}
                  defaultValue={isEditMode ? building.levelId : '1'}
                  errors={errors.levelId}
                />
                <FormHelperText error={errors.levelId}>
                  {errors.levelId ? 'El estrato debe estar entre 1 y 6' : ''}
                </FormHelperText>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={5}>
            <FormControl required className={classes.formControl}>
              <InputLabel id="labelUbication">Sector</InputLabel>
              <Controller
                render={({ onChange, value, name }) => (
                  <Select
                    labelId="labelUbication"
                    id="ubication"
                    value={value}
                    onChange={(e) => {
                      onChange(e);
                    }}
                    name={name}
                  >
                    {dataUbication.map((ubication) => (
                      <MenuItem
                        key={ubication.id}
                        value={`${ubication.discount}_${ubication.id}_${ubication.name}`}
                      >
                        {ubication.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
                control={control}
                name="ubication"
                rules={{ required: true }}
                defaultValue={isEditMode ? building.ubication : ''}
                errors={errors.UbicationType}
              />
            </FormControl>
            <FormHelperText error={errors.ubication}>
              {errors.ubication ? 'Selecciona la ubicación' : ''}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              as={
                <TextField
                  label="Dirección"
                  required
                  className={classes.textField}
                />
              }
              control={control}
              name="address"
              id="address"
              rules={{ required: true }}
              defaultValue={isEditMode ? building.address : ''}
              errors={errors.address}
            />
            <FormHelperText error={errors.address}>
              {errors.address ? 'Ingresa la dirección de la propiedad' : ''}
            </FormHelperText>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          className={classes.gridContainer2}
        >
          <Grid item>
            <Controller
              as={
                <TextField
                  label="Habitaciones"
                  required
                  className={classes.textField}
                  type="number"
                  inputProps={{ min: 1 }}
                />
              }
              control={control}
              name="rooms"
              id="rooms"
              rules={{ required: true, pattern: numberRegex }}
              defaultValue={isEditMode ? building.rooms : '1'}
              errors={errors.rooms}
            />
            <FormHelperText error={errors.rooms}>
              {errors.rooms ? 'Números del 1 en adelante' : ''}
            </FormHelperText>
          </Grid>
          <Grid item>
            <Controller
              as={
                <TextField
                  label="Baños"
                  required
                  className={classes.textField}
                  type="number"
                  inputProps={{ min: 1 }}
                />
              }
              control={control}
              name="bathrooms"
              id="bathrooms"
              rules={{ required: true, pattern: numberRegex }}
              defaultValue={isEditMode ? building.bathrooms : '1'}
              errors={errors.bathrooms}
            />
            <FormHelperText error={errors.bathrooms}>
              {errors.bathrooms ? 'Números del 1 en adelante' : ''}
            </FormHelperText>
          </Grid>
          <Grid item>
            <Controller
              as={
                <TextField
                  label="Estudios"
                  className={classes.textField}
                  type="number"
                  inputProps={{ min: 0 }}
                />
              }
              control={control}
              name="office"
              id="office"
              rules={{ required: false, pattern: numberRegex }}
              defaultValue={isEditMode ? building.office : '0'}
              errors={errors.office}
            />
            <FormHelperText error={errors.office}>
              {errors.office ? 'Solo números' : ''}
            </FormHelperText>
          </Grid>
          <Grid item>
            <Controller
              as={
                <TextField
                  label="Parqueaderos"
                  className={classes.textField}
                  type="number"
                  inputProps={{ min: 0 }}
                />
              }
              control={control}
              name="garages"
              id="garages"
              rules={{ required: false, pattern: numberRegex }}
              defaultValue={isEditMode ? building.garages : '0'}
              errors={errors.garages}
            />
            <FormHelperText error={errors.garages}>
              {errors.garages ? 'Solo números' : ''}
            </FormHelperText>
          </Grid>
          <Grid item>
            <Controller
              as={
                <TextField
                  label="Niveles"
                  required
                  className={classes.textField}
                  type="number"
                  inputProps={{ min: 1 }}
                />
              }
              control={control}
              name="floors"
              id="floors"
              rules={{ required: true, pattern: numberRegex }}
              defaultValue={isEditMode ? building.floors : '1'}
              erros={errors.floors}
            />
            <FormHelperText error={errors.floors}>
              {errors.floors ? 'Números del 1 en adelante' : ''}
            </FormHelperText>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={3}>
            <Controller
              render={({ onChange, value }) => (
                <TextField
                  label="Valor del inmueble ($)"
                  required
                  className={classes.textField}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  value={value}
                  id="price"
                />
              )}
              control={control}
              name="price"
              id="price"
              rules={{ required: true, pattern: numberRegex }}
              defaultValue={isEditMode ? building.price : ''}
              errors={errors.price}
            />
            <FormHelperText error={errors.price}>
              {errors.price ? 'Solo números' : ''}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={3}>
            <Controller
              as={
                <TextField
                  label="Administración ($)"
                  className={classes.textField}
                  disabled={isHouse}
                />
              }
              control={control}
              name="priceAdmon"
              id="priceAdmon"
              rules={{ required: false, pattern: numberRegex }}
              defaultValue={isEditMode ? building.priceAdmon : ''}
              erros={errors.priceAdmon}
            />
            <FormHelperText error={errors.priceAdmon}>
              {errors.priceAdmon ? 'Solo números' : ''}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              as={
                <TextField
                  label="URL imagen de la Propiedad"
                  required
                  className={classes.textField}
                />
              }
              control={control}
              name="imgCover"
              id="imgCover"
              rules={{ required: true }}
              defaultValue={isEditMode ? building.imgCover : ''}
              errors={errors.imgCover}
            />
            <FormHelperText error={errors.imgCover}>
              {errors.imgCover ? 'URL de la imagen' : ''}
            </FormHelperText>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          className={classes.gridContainer}
        >
          <Grid item xs={12}>
            <Controller
              as={
                <TextField
                  fullWidth
                  label="Descripción"
                  multiline
                  rows={7}
                  className={classes.textField}
                />
              }
              control={control}
              name="descripcion"
              id="descripcion"
              rules={{ required: false }}
              defaultValue={isEditMode ? building.descripcion : ''}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.gridContainer3}>
          <Grid item xs>
            <Button
              disabled={!formState.isValid}
              type="submit"
              variant="contained"
              color="primary"
              id="btnSave"
            >
              GUARDAR
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default AddForm;
