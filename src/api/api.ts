import axios from "axios";
import Cookies from "js-cookie";

export const baseService = axios.create({
  baseURL: "https://unicode-unigram.onrender.com"
})

export const setTokenBaseService = () => {
  baseService.defaults.headers.common.Authorization = "Bearer " + Cookies.get("token");
}