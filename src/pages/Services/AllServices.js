import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/UseTitle";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useTitle("Services");

  useEffect(() => {
    fetch(
      "https://service-review-assignment-server-shahiduzzamansony.vercel.app/allservices"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-5xl text-center text-bold text-orange-500 mb-4">
        Service Spheres
      </h2>
      <p className="text-xl text-center">
        Here you will experience the best tailoring services.
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
