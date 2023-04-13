import axios from "axios";

export const token = localStorage.getItem('token')

export const api = axios.create({
  baseURL: "http://back.imenu.kg/api/v1/",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Token ${token ? token : ''}`
  }
});

export const apiWithoutToken = axios.create({
  baseURL: "http://back.imenu.kg/api/v1/",
  headers: {
    "Content-type": "application/json"
  }
});