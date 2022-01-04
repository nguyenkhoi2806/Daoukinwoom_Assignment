import "./style.scss";

import React from "react";

import Curve from "../../assets/images/curve.png";
import Logo from "../../assets/images/logo.png";
import Input from "../../components/Input";
import { SELECT } from "../../constants/inputType";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page__banner">
          <div className="home-page__banner-left">
            <div className="home-page__banner-left-logo">
              <div className="home-page__banner-left-img">
                <img src={Logo} />
              </div>
              <div className="home-page__banner-left-text">
                <img src={Curve} />
                <span>Home</span>
              </div>
            </div>
            <div className="home-page__banner-left-company">
              <h1>
                ASIA IT <br /> Market Place
              </h1>
            </div>
          </div>
          <div className="home-page__banner-right">
            <div className="home-page__banner-right-menu">
              <Input
                classNameWrapper="menu"
                type={SELECT}
                options={["En"]}
                isShowPleaseChoose={false}
              />
              <Input
                classNameWrapper="menu"
                type={SELECT}
                options={["Company"]}
                isShowPleaseChoose={false}
              />
              <Input
                classNameWrapper="menu"
                type={SELECT}
                options={["Partner Market Place"]}
                isShowPleaseChoose={false}
              />
            </div>
            <div className="home-page__banner-right-service">
              <ul>
                <li>Auto Homepage</li>
                <li>Sales</li>
                <li>CRM</li>
                <li>Electronic office</li>
                <li>Cloud ERP</li>
                <li>SSL</li>
              </ul>
              <div className="home-page__banner-right-tab">
                <div className="home-page__banner-right-tab-header" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
