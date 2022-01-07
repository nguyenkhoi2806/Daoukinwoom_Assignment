import "./home.scss";

import React from "react";

import withResizing from "../../hoc/withResizing";
import Banner from "./Banner";
import Content from "./Content";
import Description from "./Description";
import Footer from "./Footer";
import Price from "./Price";

const BannerWithResizing = withResizing(Banner);

const Home = () => {
  return (
    <div className="home-page">
      <BannerWithResizing />
      <Description />
      <Content />
      <Price />
      <Footer />
    </div>
  );
};

export default Home;
