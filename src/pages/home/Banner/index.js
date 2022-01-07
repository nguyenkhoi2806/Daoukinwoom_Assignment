import "./banner.scss";

import React from "react";

import Logo from "./Logo";
import MenuMobile from "./MenuMobile";
import MenuServices from "./MenuServices";
import MenuTop from "./MenuTop";
import TabReport from "./TabsReport";

const Banner = props => {
  const { isMobile } = props;

  return (
    <div className="banner">
      <div className="banner-left">
        <Logo />
      </div>
      <div className="banner-right">
        {!isMobile && <MenuTop />}
        <div className="banner-right-service">
          {!isMobile ? <MenuServices /> : <MenuMobile />}
          <TabReport />
        </div>
      </div>
    </div>
  );
};

export default Banner;
