import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const selectedReview = useLoaderData();
  console.log(selectedReview);
  const { _id } = selectedReview;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedImage = form.image.value;
    const updatedText = form.text.value;
    fetch(
      `https://service-review-assignment-server-shahiduzzamansony.vercel.app/reviews/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ text: updatedText, image: updatedImage }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="flex flex-col my-16">
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
          <button className="btn btn-primary w-1/6 mb-4 mx-auto" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
