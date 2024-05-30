import axios from "axios";

const getAxios = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default getAxios;
