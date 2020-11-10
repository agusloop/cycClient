import axios from "axios";

const tokenAuth = async (token) => {
  if (token) {
    axios.defaults.headers.common["x-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-token"];
  }
};

export default tokenAuth;
