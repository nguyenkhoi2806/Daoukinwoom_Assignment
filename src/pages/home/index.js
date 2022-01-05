import "./style.scss";

import React from "react";

import Banner from "./Banner";
import Content from "./Content";
import Description from "./Description";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Description />
      <Content />
    </div>
  );
};

export default Home;
