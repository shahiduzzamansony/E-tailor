import React from "react";

const PersonalReviewCard = ({ review, handleDelete }) => {
  const { title, image, text } = review;

  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl my-5">
        <div className="avatar ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto ">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title ? title : ""}</h2>
          <p>{text}</p>
        </div>
        <div className="flex justify-between mx-4 my-6">
          <div className="card-actions">
            <button className="btn btn-primary">Edit Review</button>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Delete Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalReviewCard;
