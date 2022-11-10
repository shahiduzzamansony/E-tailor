import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import map from "../../images/311887702_445229331118362_6618953649146841784_n.png";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="text-center my-5">
        <Link to="/allservices">
          <button className="btn ">All Services</button>
        </Link>
      </div>
      <h2 className="text-center text-5xl text-orange-500 font-semibold my-7">
        Factory Location
      </h2>
      <div className="my-8">
        <div className="card max-h-96 max-w-4xl bg-base-100 shadow-xl mx-auto image-full">
          <figure>
            <img src={map} alt="map" />
          </figure>

          <div className="card-body my-auto">
            <h2 className="text-6xl text-center font-semibold mb-3">
              Meet Us Here
            </h2>
            <p className="text-xl text-center">
              This is our meet up location. If you think the emergence fo
              meeting just come here and meet us.
            </p>
            <p className="text-xl text-center">
              Location : ShahAli Plaza, Mirpur 10, Bus Stand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
