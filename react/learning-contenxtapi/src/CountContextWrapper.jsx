import { createContext, useState } from "react";

// 1. creating context
export const CountContext = createContext();

function CountContextWrapper({ children }) {
  const [count, setCount] = useState(0);
  return <CountContext value={[count, setCount]}>{children}</CountContext>;
}

export default CountContextWrapper;
