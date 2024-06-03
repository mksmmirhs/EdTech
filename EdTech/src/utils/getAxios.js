import axios from "axios";

const getAxios = axios.create({
  baseURL: "http://54.226.111.165/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default getAxios;
