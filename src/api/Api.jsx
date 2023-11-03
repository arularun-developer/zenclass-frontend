import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: "https://zenclass-backend-j184.onrender.com"
});

export default instance;