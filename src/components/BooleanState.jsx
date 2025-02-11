import { useState } from "react";

const BooleanState = () => {
  const [bool, setBool] = useState(false);

  return (
    <>
      <button onClick={() => setBool(!bool)}>
        {" "}
        {bool ? "true" : "false"}{" "}
      </button>
      {bool && <img src="test" alt="boo"></img>}
    </>
  );
};
export default BooleanState;
