import { useBattery } from "@uidotdev/usehooks";
import { useReducer } from "react";

function reducerFn(state, action) {
  switch (action) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return 0;
  }
}
const ReducerHook = () => {
  const [count, dispatch] = useReducer(reducerFn, 0);
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();

  return (
    <>
      <h1>Level is {level * 100}%</h1>
      <p>Chargin status {charging ? "In progress" : "disconnected"}</p>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch("increase")}>Click me</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};

export default ReducerHook;
