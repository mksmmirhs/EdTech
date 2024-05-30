import axios from "axios";

const useAxios = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default useAxios;
