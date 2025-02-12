import { useState } from "react";
import cookie from "../assets/cookie.png";
import "../styles/cookieClicker.css"

export default function cookieClicker() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  function resetIncrement() {
    setCount((prev) => (prev = 0));
  }
  return (
    <div id="cookie-card">
      <p id="cookie-text">{count} Cookies!</p>
      <button id="cookie-btn" onClick={handleIncrement}>
        <img id="cookie-img" src={cookie} alt="cookie" />
      </button>
      <button id="reset-btn" onClick={resetIncrement}>
        Reset Counter
      </button>
    </div>
  );
}
