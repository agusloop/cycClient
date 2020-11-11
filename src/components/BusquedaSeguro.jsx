import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import styles from "./styles/styles.module.css";
import { getModels } from "../api/busqueda/modelosApi";
import {
  getYears,
  getMarcaAutos,
  getTipoVehiculo,
} from "../api/busqueda/busquedaBienes";

export const BusquedaSeguro = () => {
  //
  // ** ESTADOS
  //

  const [year, setYear] = useState(undefined);
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");

  const [modelos, setModelos] = useState([]);
  const [arrayYears, setArrayYears] = useState([]);
  const [arrayMarcas, setArrayMarcas] = useState([]);
  const [arraytipoVehiculo, setArrayTipoVehiculo] = useState([]);

  //
  // ** REFERENCIAS
  //
  const previousValues = useRef({ year, marca });

  //
  // ** EFFECTS
  //

  //Cargar informacion de los años
  useEffect(() => {
    axiosGetTipo();
  }, []);

  //Cargar informacion de los años cuando cambie el tipo de vehiculo
  useEffect(() => {
    if (previousValues.current.tipo !== tipo) axiosGetYears();
  }, [tipo]);

  //Cargar informacion de las marcas cuando cambie el año
  useEffect(() => {
    if (previousValues.current.year !== year) axiosGetMarcas();
  }, [year]);

  //Se ejecuta cuándo cambian los valores de inicio
  //TIPO VEHICULO -- AÑO -- MARCA
  useEffect(() => {
    if (
      previousValues.current.tipo !== tipo &&
      previousValues.current.year !== year &&
      previousValues.current.marca !== marca
    ) {
      axiosAutoModelos();
    }
  }, [year, marca, tipo]);

  //
  // ** PETICONES API
  //
  const axiosAutoModelos = async () => {
    const models = await getModels(year, marca, tipo);
    setModelos(models);
  };

  const axiosGetYears = async () => {
    const years = await getYears(tipo);
    setArrayYears(years);
  };

  const axiosGetMarcas = async () => {
    const marcas = await getMarcaAutos(year, tipo);
    setArrayMarcas(marcas);
  };

  const axiosGetTipo = async () => {
    const tipos = await getTipoVehiculo();
    setArrayTipoVehiculo(tipos);
  };
  //
  // ** MANEJADORES
  //
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleTipoVehiculo = (e) => {
    setTipo(e.target.value);
  };

  const handleMarca = (e) => {
    setMarca(e.target.value);
  };

  console.log("year", year);
  console.log("modelos", modelos);
  return (
    <Grid container maxwidth='sm'>
      <Grid item xs={12} sm={3} className={styles.gridMain}>
        <InputLabel>Vehiculo</InputLabel>
        <FormControl className={styles.formItem}>
          <Select
            value={tipo}
            onChange={handleTipoVehiculo}
            variant='outlined'
            className={styles.selectItem}
          >
            {arraytipoVehiculo.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={3} className={styles.gridMain}>
        <InputLabel>Año</InputLabel>
        <FormControl className={styles.formItem}>
          <Select
            value={year}
            onChange={handleYear}
            variant='outlined'
            className={styles.selectItem}
          >
            {arrayYears.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={3} className={styles.gridMain}>
        <InputLabel>Marca</InputLabel>
        <FormControl className={styles.formItem}>
          <Select
            value={marca}
            onChange={handleMarca}
            variant='outlined'
            className={styles.selectItem}
          >
            {arrayMarcas.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={3} className={styles.gridMain}>
        <InputLabel>Modelo</InputLabel>

        {modelos.length > 0 ? (
          <FormControl className={styles.formItem}>
            <Autocomplete
              className={styles.selectItem}
              options={modelos}
              getOptionLabel={(auto) => auto.auto_descrip}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin='normal'
                  className={styles.inputAutocomple}
                  variant='outlined'
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </FormControl>
        ) : (
          <Typography variant='h5'>No hay datos</Typography>
        )}
      </Grid>
    </Grid>
  );
};
