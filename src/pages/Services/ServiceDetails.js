import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { title, price, details, image } = serviceDetails;
  return (
    <div className=" flex flex-col lg:flex-row">
      <div className="card w-96 bg-base-100 shadow-xl ml-12">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="font-semibold">Charge: {price} TK</p>
        </div>
      </div>
      <div className="mx-auto">review</div>
    </div>
  );
};

export default ServiceDetails;
