import "./style.scss";

import React from "react";

import Banner from "./Banner";
import Content from "./Content";
import Description from "./Description";
import Price from "./Price";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Description />
      <Content />
      <Price />
    </div>
  );
};

export default Home;
