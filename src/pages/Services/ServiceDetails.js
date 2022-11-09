import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/UseTitle";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  useTitle("Service Details");
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const { _id, title, price, details, image } = serviceDetails;
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
      <h2 className="text-center text-green-400 my-5 text-3xl fonr-semibold">
        Here are our reviews!
      </h2>
      <Reviews head={title}></Reviews>
      <div className="flex justify-center">
        <Link to={`/addReviews/${_id}`}>
          <button className="btn btn-primary my-4">Add your views</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
