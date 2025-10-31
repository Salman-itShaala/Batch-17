import React from "react";

const MemoComponent = () => {
  const [count, setCount] = useState(0);
  // state
  const [isActive, setIsActive] = useState(false);

  const computedFn = useMemo(() => {
    return () => {};
  }, [count]);

  return (
    <>
      <p>We are learning useMemo</p>
      <h1>Count is {count} and sum is</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setIsActive(!isActive)}>Toggle activeness</button>
    </>
  );
};

export default MemoComponent;
