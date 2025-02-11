import { useState } from "react";

const ObjectState = () => {
  const [book, setBook] = useState({
    author: "Matt Dinniman",
    title: "Dungeon Crawler Carl",
    year: 2020,
  });

  const authorChange = (e) => {
    setBook((b) => ({ ...b, author: e.target.value }));
  };
  const titleChange = (e) => {
    setBook((b) => ({ ...b, title: e.target.value }));
  };
  const yearChange = (e) => {
    setBook((b) => ({ ...b, year: e.target.value }));
  };

  return (
    <>
      <div>
        <p>{book.author}</p>
        <p>{book.title} </p>
        <p>{book.year} </p>
      </div>
      <div>
        <input
          type="text"
          id="author"
          value={book.author}
          onChange={authorChange}
        />
        <input
          type="text"
          id="title"
          value={book.title}
          onChange={titleChange}
        />
        <input
          type="number"
          id="year"
          value={book.year}
          onChange={yearChange}
        />
      </div>
    </>
  );
};
export default ObjectState;
