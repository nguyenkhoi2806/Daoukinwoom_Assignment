import "./style.scss";

import React from "react";

import Input from "../../../../components/Input";
import { SELECT } from "../../../../constants/inputType";
import AuthenticateMenuContainer from "./AuthenticateMenu/AuthenticateMenuContainer";

const MenuTop = () => {
  return (
    <div className="menu-top">
      <AuthenticateMenuContainer />
      <Input
        classNameWrapper="menu-top__menu"
        type={SELECT}
        options={["En"]}
        isShowPleaseChoose={false}
      />
      <Input
        classNameWrapper="menu-top__menu"
        type={SELECT}
        options={["Company"]}
        isShowPleaseChoose={false}
      />
      <Input
        classNameWrapper="menu-top__menu"
        type={SELECT}
        options={["Partner Market Place"]}
        isShowPleaseChoose={false}
      />
    </div>
  );
};

export default MenuTop;
