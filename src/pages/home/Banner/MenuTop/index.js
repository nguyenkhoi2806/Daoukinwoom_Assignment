import "./style.scss";

import React from "react";

import Input from "../../../../components/Input";
import { SELECT } from "../../../../constants/inputType";

const MenuTop = () => {
  return (
    <div className="menu-top">
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
