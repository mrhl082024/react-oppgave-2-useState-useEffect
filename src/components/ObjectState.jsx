import { useState } from "react";

const ObjectState = () => {
  const [book, setBook] = useState({
    author: "Matt Dinniman",
    title: "Dungeon Crawler Carl",
    year: 2020,
  });

  return (
    <>
      <p>{book.author}</p>
      <p>{book.title} </p>
      <p>{book.year} </p>
    </>
  );
};
export default ObjectState;
