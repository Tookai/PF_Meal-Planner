import axios from "axios";
import Cookies from "js-cookie";

const local = "http://localhost:5500/api";

const Axios = axios.create({
  baseURL: local,
  headers: { Authorization: `Bearer ${Cookies.get("user") ? JSON.parse(Cookies.get("user")).token : ""}` },
});

export const registerUser = (user) => Axios.post("user/register", user).then((res) => res.data);

export const loginUser = (user) => Axios.post("user/login", user).then((res) => res.data);
