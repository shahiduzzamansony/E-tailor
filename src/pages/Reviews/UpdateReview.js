import React from "react";

const UpdateReview = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Your image"
          name="image"
          className="input input-bordered w-full max-w-xs mb-3 mx-auto"
          required
        />
        <input
          type="text"
          placeholder="Review"
          name="text"
          className="input input-bordered w-full max-w-xs mb-3 mx-auto"
          required
        />
      </form>
    </div>
  );
};

export default UpdateReview;
