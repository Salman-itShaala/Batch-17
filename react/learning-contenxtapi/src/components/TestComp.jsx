import React, { useContext } from "react";
import { CountContext } from "../App";

function TestComp() {
  const [count, setCount] = useContext(CountContext);
  return (
    <>
      <h1>Count is {count}</h1>
    </>
  );
}

export default TestComp;
