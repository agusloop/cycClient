import axios from "axios";
const { API_HOST } = require("../../utils/const");

export const obtenerTelefonosAPI = async () => {
  let url = `${API_HOST}/usuarios/telefono`;

  try {
    const token = localStorage.getItem("x-token");
    const respuesta = await axios.get(url, {
      headers: { Authorization: "Bearer " + token },
    });

    return respuesta.data.data;
  } catch (error) {
    return error.response;
  }
};
export const createTelefonoAPI = async (telefonoObj) => {
  let url = `${API_HOST}/usuarios/email`;

  try {
    const token = localStorage.getItem("x-token");
    const respuesta = await axios.post(url, telefonoObj, {
      headers: { Authorization: "Bearer " + token },
    });

    return respuesta.data;
  } catch (error) {
    return error.response;
  }
};

export const deleteTelefonoAPi = async (idTelefono) => {
  let url = `${API_HOST}/usuarios/email/${idTelefono}`;
  try {
    const token = localStorage.getItem("x-token");
    const respuesta = await axios.delete(url, {
      headers: { Authorization: "Bearer " + token },
    });
    return respuesta.data;
  } catch (error) {
    return error.response;
  }
};
