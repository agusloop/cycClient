import axios from "axios";
import { API_HOST } from "../../utils/const";

export const getYears = async () => {
  let url = `${API_HOST}/search/year`;
  const res = await axios.get(url, { method: "GET" });
  return res.data.data;
};

//TOMA COMO PARAMETRO UN AÑO
export const getMarcaAutos = async (year) => {
  let url = `${API_HOST}/search/marca`;
  //Se  pasan el parametro de busqueda year ya que en la api es requerido
  const res = await axios.get(url, { method: "GET", params: { year: year } });
  return res.data.data;
};

export const getTipoVehiculo = async () => {
  let url = `${API_HOST}/search/tipo`;
  const res = await axios.get(url);
  return res.data.data;
};
