import { useDispatch } from "react-redux";
import { changeByValue, increment } from "../slices/counterSlice";

function Comp1() {
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => dispatch(increment())}>Click me</button>
      <br />
      <br />
      <button onClick={() => dispatch(changeByValue(100))}>
        Change by 100
      </button>
      <button onClick={() => dispatch(changeByValue(5))}>Change by 5</button>
    </div>
  );
}

export default Comp1;
