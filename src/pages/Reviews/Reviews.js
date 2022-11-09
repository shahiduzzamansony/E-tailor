import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ head }) => {
  console.log(head);
  const [reviews, setReviews] = useState([]);
  const url = `https://service-review-assignment-server-shahiduzzamansony.vercel.app/reviews?title=${head}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [head]);
  return (
    <div className=" flex flex-col lg:flex-row gap-5 justify-center">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;
