import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="text-center my-5">
        <Link to="/services">
          <button className="btn ">All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
