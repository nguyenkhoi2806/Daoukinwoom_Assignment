import "./banner.scss";

import React from "react";

import Logo from "./Logo";
import MenuMobileContainer from "./MenuMobile/MenuMobileContainer";
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
        {!isMobile && <MenuTop data-test="menu-top" />}
        <div className="banner-right-service">
          {!isMobile ? (
            <MenuServices data-test="menu-service" />
          ) : (
            <MenuMobileContainer data-test="menu-mobile" />
          )}
          <TabReport />
        </div>
      </div>
    </div>
  );
};

export default Banner;
