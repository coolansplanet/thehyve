import axios from "axios";
const api = "http://api.citybik.es";

export const getAllNetworks = filters => {
  return axios.get(
    `${api}/v2/networks${filters ? "?fields=" + filters.join() : ""}`
  );
};

export const getNetwork = link => {
  return axios.get(api + link);
};
