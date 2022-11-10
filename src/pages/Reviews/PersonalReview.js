import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import PersonalReviewCard from "./PersonalReviewCard";

const PersonalReview = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(user.email);

  useEffect(() => {
    fetch(
      `https://service-review-assignment-server-shahiduzzamansony.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logout();
        }
        return res.json();
      })
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [user?.email, logout]);
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

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
      {reviews?.map((review) => (
        <>
          <PersonalReviewCard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></PersonalReviewCard>
        </>
      ))}
    </div>
  );
};

export default PersonalReview;
