import React from "react";
import AddReview from "./AddReview";
import PersonalReview from "./PersonalReview";

const MyReviews = () => {
  return (
    <div>
      <div>
        <AddReview></AddReview>
      </div>
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
