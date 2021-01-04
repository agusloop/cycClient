import axios from "axios";
import { API_HOST } from "../../utils/const";

export const getModels = (year, marca, tipo) => {
  let url = `${API_HOST}/search`;
  return axios
    .get(url, { params: { year: year, marca: marca, tipo: tipo } })
    .then((res) => {
      return res.data.data;
    });
};
