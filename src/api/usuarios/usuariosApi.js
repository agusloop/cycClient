import axios from "axios";
import { API_HOST } from "../../utils/const";

export const createUsuario = async (user) => {
  let url = `${API_HOST}/usuarios`;

  try {
    const respuesta = await axios.post(url, user, {
      method: "POST",
      baseURL: url,
    });

    return respuesta.data;
  } catch (error) {
    console.log("Error", error);
  }
  console.log("Info recibida", user);
};
