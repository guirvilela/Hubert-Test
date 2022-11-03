import axios from "axios";

const api = axios.create({
  baseURL: "https://6361c58e7521369cd05e17af.mockapi.io/api/v1",
});

export default api;
