import axios from "axios";

export const baseService = axios.create({
  baseURL: "https://unicode-unigram.onrender.com"
})