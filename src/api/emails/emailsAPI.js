import axios from "axios";
import { API_HOST } from "../../utils/const";

export const GetAllEmails = async () => {
  let url = `${API_HOST}/usuarios/email`;

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

export const createEmailAPI = async (emailObj) => {
  let url = `${API_HOST}/usuarios/email`;

  try {
    const token = localStorage.getItem("x-token");
    const respuesta = await axios.post(url, emailObj, {
      headers: { Authorization: "Bearer " + token },
    });

    return respuesta.data;
  } catch (error) {
    return error.response;
  }
};
export const deleteEmailAPi = async (idEmail) => {
  let url = `${API_HOST}/usuarios/email/${idEmail}`;
  try {
    const token = localStorage.getItem("x-token");
    const respuesta = await axios.delete(url, {
      headers: { Authorization: "Bearer " + token },
    });
    return respuesta.data;
  } catch (error) {}
};
