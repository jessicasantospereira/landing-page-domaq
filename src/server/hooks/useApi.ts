import axios from "axios";

export async function useApi() {
  const api = axios.create({
    baseURL: "http://localhost:8080/api",
  });
  return api;
}
