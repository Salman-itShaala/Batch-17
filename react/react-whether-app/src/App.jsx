import { useState } from "react";
import "./App.css";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [whetherInfo, setWhetherInfo] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Hiii");
    // cityInput
    // api call
    // fetch(api)
    // res --> data
    // setWhe(data)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl text-center font-bold my-4">
        Live Whether App 🌅
      </h1>
      <div className="p-4">
        <form
          onSubmit={handleFormSubmit}
          className="flex gap-4 justify-center text-2xl"
        >
          <label>
            Enter city :
            <input
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              type="text"
              placeholder="Enter city"
              required
              className="border p-2 rounded-md ml-2"
            />
          </label>
          <button type="submit" className="px-4 py-2 bg-green-500 rounded-md">
            Search
          </button>
        </form>
      </div>
      <div>{whetherInfo && <div>{whetherInfo.city}</div>}</div>
    </div>
  );
}

export default App;
