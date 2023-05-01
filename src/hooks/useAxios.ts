import axios from "axios";

const useAxios = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  if (typeof window !== "undefined") {
    instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("auth_token")}`;
    instance.defaults.headers.common["ngrok-skip-browser-warning"] = "test";
  }

  return instance;
};

export default useAxios;
