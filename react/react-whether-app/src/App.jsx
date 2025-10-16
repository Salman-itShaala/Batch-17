import { useState } from "react";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [whetherInfo, setWhetherInfo] = useState();
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);

      const res = await fetch(
        `https://api.weatherstack.com/current?access_key=bb38bbba4dc826b39d6fc20e1b052d2e&query=${cityInput}`
      );

      if (!res.ok) {
        // alert("Something went wrong");
        toast.error("Wrong city input");
        return;
      }

      const data = await res.json();

      console.log(data);

      setWhetherInfo(data);

      setCityInput("");
    } catch (error) {
      alert("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer theme="colored" autoClose={3000} />
      <h1 className="text-3xl text-center font-bold my-4">
        Live Whether App 🌅
      </h1>
      <div className="p-4">
        <WhetherForm
          handleFormSubmit={handleFormSubmit}
          cityInput={cityInput}
          setCityInput={setCityInput}
        />
      </div>
      <div>
        {loading ? (
          <p className="text-4xl font-bold">Loading...</p>
        ) : (
          whetherInfo && (
            <div className="flex gap-4 font-2xl font-bold flex-col">
              <p>City is : {whetherInfo.request.query}</p>
              <p>Description is: {whetherInfo.current.weather_descriptions}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function WhetherForm({ handleFormSubmit, cityInput, setCityInput }) {
  return (
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
  );
}

export default App;
