import React, { useState } from "react";

const AddReview = ({ addReview, book }) => {
  const [newReview, setNewReview] = useState({
    text: "",
    book_id: book.id,
  });


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setNewReview({ ...newReview, [name]: value });
  };


  function handleSubmit(event) {
    event.preventDefault();

    const addNewReview = {
      text: newReview.text,
      book_id: newReview.book_id,
    };

    fetch(`http://localhost:9292/books/${book.id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewReview),
    })
      .then((response) => response.json())
      .then((data) => addReview(data));
    setNewReview({
      text: "",
      book_id: newReview.book_id,
    });
  }


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Post a Review"
          name="text"
          value={newReview.text}
          onChange={handleChange}
        ></textarea>
        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};


export default AddReview;
