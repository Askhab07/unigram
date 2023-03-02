import axios from "axios";
import Cookies from "js-cookie";
// import { logoutReducer } from "../store/reducers/userSlice";
import { store } from "../store/store";

export const baseService = axios.create({
  baseURL: "https://unicode-unigram-xmfu.onrender.com"
})

export const setTokenBaseService = () => {
  baseService.defaults.headers.common.Authorization = "Bearer " + Cookies.get("token");
}

const logout = () => {
  Cookies.remove("token")
  // store.dispatch(logoutReducer)
}

baseService.interceptors.response.use(
  (res) => res,
  (err) => {
    if(err.response.status === 401){
      logout()
    }
    return err
  }
)