import { useState } from "react";
import cookie from "../assets/cookie.png";
import "../styles/cookieClicker.css";

export default function cookieClicker() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  function resetIncrement() {
    setCount((prev) => (prev = 0));
  }
  return (
    <div id="cookieCard">
      <p>{count} Cookies!</p>
      <button id="cookieBtn" onClick={handleIncrement}>
        <img id="cookieImg" src={cookie} alt="cookie" />
      </button>
      <button id="resetBtn" onClick={resetIncrement}>
        Reset Counter
      </button>
    </div>
  );
}
