import axios from "axios";

const getAxios = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000,
});

export default getAxios;
