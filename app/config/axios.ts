import axiosPackage from "axios";

const axios = axiosPackage.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
