import React from "react";
import Header from "../components/Header";
import Banner from "../img/banner.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="banner">
        <div>
          <h1>Welcome to </h1>
          <h2>Darji Samaj Matrimony</h2>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
