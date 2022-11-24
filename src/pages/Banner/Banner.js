import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl mx-32">
        <figure>
          <img src={banner} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">Town's Best Tailor!</h2>
          <p className="text-xl mt-4">
            We provide the best tailoring services in the town.
            <br /> Just trust us once and experience the luxury of tailoring
            services.
          </p>
          <div className="card-actions justify-start">
            <Link>
              <button className="btn btn-primary">More About Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
