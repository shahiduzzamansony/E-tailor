import React from "react";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const details = form.details.value;
    const service = {
      title,
      image,
      price,
      details,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service added succesfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handleAddService}>
        <div className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs mb-3 mx-auto"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            className="input input-bordered w-full max-w-xs mb-3 mx-auto"
            required
          />
          <input
            type="text"
            placeholder="Charge"
            name="price"
            className="input input-bordered w-full max-w-xs mb-3 mx-auto "
            required
          />
          <input
            type="text"
            placeholder="Details"
            name="details"
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

export default AddService;
