import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { title, price, image, details, _id } = service;
  return (
    <PhotoProvider>
      <div className="mx-auto my-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="pt-5">
            <PhotoView src={image}>
              <img
                src={image}
                alt="Shoes"
                className="rounded-xl mx-w-sm max-h-36"
              />
            </PhotoView>
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
    </PhotoProvider>
  );
};

export default ServiceCard;
