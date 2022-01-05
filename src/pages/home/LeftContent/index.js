import "./styles.scss";

import React from "react";

import Curve from "../../../assets/images/curve.png";
import Logo from "../../../assets/images/logo.png";

const LeftContent = () => (
  <>
    <div className="left-content">
      <div className="left-content__logo">
        <img src={Logo} />
      </div>
      <div className="left-content__home-menu">
        <img src={Curve} />
        <span>Home</span>
      </div>
    </div>
    <div className="left-content__company">
      <h1>
        ASIA IT <br /> Market Place
      </h1>
    </div>
  </>
);

export default LeftContent;
