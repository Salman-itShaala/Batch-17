import { createContext, useState } from "react";
import "./App.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import CountContextWrapper from "./CountContextWrapper";

function App() {
  return (
    <div className="h-screen bg-zinc-800 text-white">
      <h1 className="text-4xl text-center p-10 font-bold">
        We are learning React
      </h1>
      <div className="flex gap-10 justify-center border-2 border-green-400 p-10 max-w-3xl mx-auto">
        <CountContextWrapper>
          <Comp1 />
          <Comp2 />
        </CountContextWrapper>
      </div>
    </div>
  );
}

export default App;
