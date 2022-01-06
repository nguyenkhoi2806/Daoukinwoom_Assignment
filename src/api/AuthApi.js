import axios from "axios";

export default class AuthApi {
  static login = () => {
    return axios.get("https://6164054db55edc00175c1cc9.mockapi.io/", {
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Credentials": false,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    });
  };
}
