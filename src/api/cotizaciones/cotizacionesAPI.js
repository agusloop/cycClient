import axios from "axios";
import { API_HOST } from "../../utils/const";

export const hacerCotizacion = async (objCotizacion) => {
  console.log("Datos recibios en la cotizacion", objCotizacion);
  const url = `${API_HOST}/busqueda/gnp/cot`;

  try {
    const respuesta = await axios.post(url, objCotizacion);
    console.log("datos retornados", respuesta.data);
    return respuesta.data;
  } catch (error) {
    console.log("Error", error);
  }
};
