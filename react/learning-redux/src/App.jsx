import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

function App() {
  return (
    <>
      <h1>Hii there </h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <Comp1 />
        <Comp2 />
      </div>
    </>
  );
}

export default App;
