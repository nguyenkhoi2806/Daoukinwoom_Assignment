import "./style.scss";

import React from "react";

import Banner from "./Banner";
import Description from "./Description";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Description />
    </div>
  );
};

export default Home;
