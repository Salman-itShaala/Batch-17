import { useSelector } from "react-redux";

function Comp2() {
  const count = useSelector((state) => state.counterReducer);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Count is {count}</h2>
    </div>
  );
}

export default Comp2;
