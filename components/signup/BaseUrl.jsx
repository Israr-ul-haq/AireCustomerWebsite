import axios from "axios";
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "http://3.134.204.160:81",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("aireuser"))?.token
    }`,
  },
});

export default instance;
