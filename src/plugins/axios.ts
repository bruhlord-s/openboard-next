import axios from "axios";

console.log(process.env.NEXT_PUBLIC_API_URL);

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

if (typeof window !== undefined) {
  // instance.defaults.headers.common["Authorization"] =
  // localStorage.getItem("auth_token");
}

export default instance;
