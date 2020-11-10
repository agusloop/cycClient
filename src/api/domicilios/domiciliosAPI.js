import axios from "axios";

export const getDomicilioByZIP = async (zipCode) => {
  let url = `https://api-sepomex.hckdrk.mx/query/info_cp/${zipCode}`;

  const res = await axios.get(url);

  return res.data;
};

export const createDomicilioAPI = async (domObj) => {
  let url = `${API_HOST}/usuarios/email`;

  try {
    const respuesta = await axios.post(url, domObj, {
      headers: { Authorization: "Bearer " + token },
    });

    return respuesta.data;
  } catch (error) {
    return error.response;
  }
};
export const deleteDomicilioAPi = async (idDom) => {
  let url = `${API_HOST}/usuarios/email/${idDom}`;
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
