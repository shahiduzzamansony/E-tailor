import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, price, image, details, _id } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details.slice(0, 91)}...</p>
          <p>Charge:{price}TK</p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link to={`/serviceDetails/${_id}`}>Service Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
