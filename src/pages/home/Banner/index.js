import "./style.scss";

import React from "react";

import Logo from "./Logo";
import MenuServices from "./MenuServices";
import MenuTop from "./MenuTop";
import TabReport from "./TabsReport";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <Logo />
      </div>
      <div className="banner-right">
        <MenuTop />
        <div className="banner-right-service">
          <MenuServices />
          <TabReport />
        </div>
      </div>
    </div>
  );
};

export default Banner;
