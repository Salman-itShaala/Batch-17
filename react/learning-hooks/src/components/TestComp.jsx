import React, { useRef, useState } from "react";

const TestComp = () => {
  const [count, setCount] = useState(0);
  const numberRef = useRef(10); // {current : null}

  function printValue() {
    console.log(numberRef.current);
  }

  function updateNumber() {
    numberRef.current = 20;
  }

  return (
    <div className="container">
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <br />
      <br />
      <button onClick={printValue}>Print Num</button>
      <br />
      <br />
      <button onClick={updateNumber}>Change num</button>
    </div>
  );
};

export default TestComp;
