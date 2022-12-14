import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ head }) => {
  console.log(head);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(
      `https://service-review-assignment-server-shahiduzzamansony.vercel.app/allreviews?title=${head}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [head]);
  return (
    <div className=" grid grid-rows-1 md:grid-cols-3 gap-5 justify-center">
      {reviews?.map((review) => (
        <ReviewCard key={review._id} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;
