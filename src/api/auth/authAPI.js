import axios from "axios";
import { API_HOST } from "../../utils/const";

export const obtenerUsuarioAutenticado = async () => {
  let url = `${API_HOST}/auth`;
  try {
    const respuesta = await axios.get(url, {
      method: "GET",
    });
    return respuesta.data;
  } catch (error) {
    return error.response;
  }
};

export const loginUsuarios = async (datos) => {
  let url = `${API_HOST}/auth`;
  try {
    const respuesta = await axios.post(url, datos);
    return respuesta.data;
  } catch (error) {
    console.log("Error", error.response);
  }
};
