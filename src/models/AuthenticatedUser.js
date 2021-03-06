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
      id: state.id,
      name: state.name,
      avatar: state.avatar,
      username: state.username,
      createdAt: state.createdAt
    });
  };

  isAuthenticated = () => {
    return this.getId() !== "";
  };
}

export default AuthenticatedUser;
