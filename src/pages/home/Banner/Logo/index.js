import "./style.scss";

import React from "react";

import Curve from "../../../../assets/images/curve.png";
import LogoImage from "../../../../assets/images/logo.png";

const Logo = () => (
  <>
    <div className="logo">
      <div className="logo__image">
        <img src={LogoImage} />
      </div>
      <div className="logo__home-menu">
        <img src={Curve} />
        <span>Home</span>
      </div>
    </div>
    <div className="logo__company">
      <h1>
        ASIA IT <br /> Market Place
      </h1>
    </div>
  </>
);

export default Logo;
