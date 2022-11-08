import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  return (
    <div>
      <h2>{serviceDetails.title}</h2>
    </div>
  );
};

export default ServiceDetails;
