import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authprovider/AuthProvider";
import useTitle from "../../hooks/UseTitle";

const AddReview = () => {
  useTitle("Add Review");
  const data = useLoaderData();
  const { title } = data;
  //   console.log(title);
  const { user } = useContext(AuthContext);
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    // const title = form.title.value;
    const image = form.image.value;
    const text = form.text.value;
    const email = user?.email || "unregistered";
    const review = {
      email,
      title,
      image,
      text,
    };
    // console.log(review);
    fetch(
      "https://service-review-assignment-server-shahiduzzamansony.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review added succesfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handleAddReview}>
        <div className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Please use same title"
            defaultValue={title}
            className="input input-bordered w-full max-w-xs mb-3 mx-auto"
            required
          />
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

export default AddReview;
