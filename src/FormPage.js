import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FormPage = ({ addBooks }) => {
  let history = useHistory();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    likes: 0,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBook({ ...newBook, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewBook = {
      title: newBook.title,
      author: newBook.author,
      likes: 0,
    };

    fetch(`http://localhost:9292/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewBook),
    })
      .then((response) => response.json())
      .then(addBooks);
    setNewBook({
      title: "",
      author: "",
      likes: 0,
    });
    history.push("/books");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add Books</h4>

        <input
          type="text"
          placeholder="Book Title"
          name="title"
          value={newBook.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={handleChange}
        ></input>
        <br />

        <input className="button" type="submit" />
      </form>
      <img
        alt="book"
        // src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        src="https://d1231c29xbpffx.cloudfront.net/store/product/179030/image/963464827d2ab28f805fe9b5aaa5e141.png?Expires=1662880231&Signature=B9V35Eb6WwS~U2mSdBpfetpIYQGi~ttHr-YRTGUG8NlLqP7V74s2yvOXd0mw2FCzN0xTYF-670H4Gg0grW4xeorqH8sWpeOdrxXetEt14OdQ891g6GdF2Bof2SoOtXpvdA6kKA9SwJkt9ldALTKfsJ0h5DJJ8FRtfb4WUMT3hEHbmBlmT4iUXBZ6UjHZoIEvOf~RnLpHICH3DCvqqEaBcTz9DNwqzIzPl17VxZIL9yJMSdd~jPPnS6mKAP7NRoeQ81kgd17SUEGKEXTC2D-BJr9LWoPQfg3pYFZohnGAI2gbTTRJVK0UP7QcCZryPHRyqCpgwPlMawqox-vioBviTQ__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ"

      ></img>
    </div>
  );
};
export default FormPage;
