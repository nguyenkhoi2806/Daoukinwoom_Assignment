import { Model } from "react-axiom";

class AuthenticatedUser extends Model {
  static defaultState() {
    return {
      id: "",
      name: null,
      avatar: null,
      username: "",
      createdAt: null
    };
  }
}

export default AuthenticatedUser;
