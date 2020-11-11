import axios from "axios";
import { API_HOST } from "../../utils/const";
//TOMA COMO PARAMETRO UN TIPO DE VEHICULO
// *COMERCIAL -- AUTO
export const getYears = async (tipo) => {
  let url = `${API_HOST}/search/year`;
  const res = await axios.get(url, { method: "GET", params: { tipo: tipo } });
  return res.data.data;
};

//TOMA COMO PARAMETRO UN AÑO
export const getMarcaAutos = async (year, tipo) => {
  let url = `${API_HOST}/search/marca`;
  //Se  pasan el parametro de busqueda year ya que en la api es requerido
  const res = await axios.get(url, {
    method: "GET",
    params: { year: year, tipo: tipo },
  });
  return res.data.data;
};

export const getTipoVehiculo = async () => {
  let url = `${API_HOST}/search/tipo`;
  const res = await axios.get(url);
  return res.data.data;
};
