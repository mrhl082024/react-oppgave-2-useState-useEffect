import { useState } from "react";

const BooleanState = () => {
  const [bool, setBool] = useState(false);

  return (
    <>
      <button>{bool ? "true" : "false"} </button>
    </>
  );
};
export default BooleanState;
