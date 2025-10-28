import React, { useContext, useState } from "react";
import { CountContext } from "../CountContextWrapper";

const Comp1 = () => {
  const [count, setCount] = useContext(CountContext);

  return (
    <div className="text-2xl text-center font-bold border-4 border-amber-500 p-10">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-amber-300 px-4 py-1 mt-4 border rounded-2xl cursor-pointer hover:bg-amber-500"
      >
        Increase count
      </button>
    </div>
  );
};

export default Comp1;
