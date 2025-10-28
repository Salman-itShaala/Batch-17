import React, { useContext } from "react";
import { CountContext } from "../CountContextWrapper";

const Comp2 = () => {
  const [count, setCount] = useContext(CountContext);
  return (
    <div className="text-2xl font-bold border-4 border-red-500 p-10">
      <p>Count is {count}</p>
    </div>
  );
};

export default Comp2;
