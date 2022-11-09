import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { title, price, details, image } = serviceDetails;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto my-4">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="font-semibold">Charge: {price} TK</p>
        </div>
      </div>
      <Reviews head={title}></Reviews>
    </div>
  );
};

export default ServiceDetails;
