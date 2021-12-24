import { Model } from "react-axiom";

class Country extends Model {
  static defaultState() {
    return {
      name: "",
      code: "",
      value: 0
    };
  }

  set = (field, value) => {
    this.setState({ [field]: value });
    return this;
  };
}

export default Country;
