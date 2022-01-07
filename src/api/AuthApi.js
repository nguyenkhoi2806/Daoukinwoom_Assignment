import axios from "axios";

export default class AuthApi {
  static login = () => {
    return axios.get("https://6164054db55edc00175c1cc9.mockapi.io/", {
      withCredentials: false,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
  };
}
