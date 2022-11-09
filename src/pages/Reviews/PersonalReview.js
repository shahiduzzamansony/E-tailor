import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import PersonalReviewCard from "./PersonalReviewCard";

const PersonalReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://service-review-assignment-server-shahiduzzamansony.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [user?.email]);
  return (
    <div className=" grid grid-rows-1 md:grid-cols-3 gap-5 justify-center">
      {reviews.map((review) => (
        <PersonalReviewCard
          key={review._id}
          review={review}
        ></PersonalReviewCard>
      ))}
    </div>
  );
};

export default PersonalReview;
