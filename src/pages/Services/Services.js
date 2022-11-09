import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://service-review-assignment-server-shahiduzzamansony.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-3xl text-center text-semibold text-orange-500">
        Service Spheres
      </h2>
      <p className="text-xl text-center">
        Here you will experience the best tailoring services.
      </p>
      <div className=" grid grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
