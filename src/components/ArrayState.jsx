import { useState } from "react";

const ArrayState = () => {
  const [array, setArray] = useState(["en", "to", "tre"]);

  const handleField=()=>{
    const newString = document.getElementById("text-field").value
    document.getElementById("text-field").value=""
    setArray([...array,newString])
  }

  return (
    <>
      <input type="text" id="text-field" placeholder="insert text here" />
      <button onClick={()=>handleField()} >submit</button>
      {array.map((arr, index) => (
        <p key= {index} > {arr}</p>
      ))}
    </>
  );
};
export default ArrayState;
