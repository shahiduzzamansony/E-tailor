import React from "react";
import useTitle from "../../hooks/UseTitle";
import PersonalReview from "./PersonalReview";

const MyReviews = () => {
  useTitle("My Reviews");
  return (
    <div>
      <h2 className="text-green-500 text-3xl font-semibold text-center my-6">
        Your reviews
      </h2>
      <div>
        <PersonalReview></PersonalReview>
      </div>
    </div>
  );
};

export default MyReviews;
