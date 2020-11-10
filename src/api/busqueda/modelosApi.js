import axios from "axios";
import { API_HOST } from "../../utils/const";

export const getModels = (year, marca) => {
  console.log("Datos recibidos", year, marca);
  let url = `${API_HOST}/search`;
  return axios
    .get(url, { params: { year: year, marca: marca } })
    .then((res) => {
      return res.data.data;
    });
};
