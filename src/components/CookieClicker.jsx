import { useState } from "react";
import cookie from "../assets/cookie.png"
import "../styles/cookieClicker.css"

export default function cookieClicker() {
  const [count, setCount] = useState(0);
  function handleIncrement(){
    setCount(count + 1)
  }
  return <>
  <p>{count} Cookies!</p>
  <button id="cookieBtn" onClick={handleIncrement} ><img id="cookieImg" src={cookie} alt="cookie" /></button>
  </>;
}
