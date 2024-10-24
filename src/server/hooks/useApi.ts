import axios from "axios";

export function useApi() {
  const api = axios.create({
    baseURL: "http://localhost:8080/api",
  });
  return api;
}
