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
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      fetch(
        `https://service-review-assignment-server-shahiduzzamansony.vercel.app/reviews/${id}`,
        { method: "DELETE" }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("successful");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  const handleUpdate = (updatedText, updatedImage, id) => {
    fetch(
      `https://service-review-assignment-server-shahiduzzamansony.vercel.app/reviews/${id}`,
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
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
      {reviews.map((review) => (
        <>
          <PersonalReviewCard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></PersonalReviewCard>
        </>
      ))}
    </div>
  );
};

export default PersonalReview;
