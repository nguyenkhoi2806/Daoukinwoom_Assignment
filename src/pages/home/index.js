import "./style.scss";

import React from "react";

import LeftContent from "./LeftContent";
import MenuServices from "./RightContent/MenuServices";
import MenuTop from "./RightContent/MenuTop";
import TabReport from "./RightContent/TabsReport";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page__banner">
          <div className="home-page__banner-left">
            <LeftContent />
          </div>
          <div className="home-page__banner-right">
            <MenuTop />
            <div className="home-page__banner-right-service">
              <MenuServices />
              <TabReport />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
