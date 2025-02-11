import { useState } from "react";

const ObjectState = () => {
  const [book, setBook] = useState({
    author: "Matt Dinniman",
    title: "Dungeon Crawler Carl",
    year: 2020,
  });

  return (
    <>
    <div>
      <p>{book.author}</p>
      <p>{book.title} </p>
      <p>{book.year} </p>
        
    </div>
    <div>
        <input type="text" id="author" value={book.author} />
        <input type="text" id="title" value={book.title} />
        <input type="number" id="year" value={book.year} />
    </div>
    </>
  );
};
export default ObjectState;
