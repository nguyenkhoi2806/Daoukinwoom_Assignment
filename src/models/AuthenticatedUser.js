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

  static create = state => {
    return new AuthenticatedUser({
      name: state.name,
      avatar: state.avatar,
      username: state.username,
      createdAt: state.createdAt
    });
  };
}

export default AuthenticatedUser;
