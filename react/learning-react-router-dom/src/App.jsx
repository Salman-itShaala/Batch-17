import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about"> About</Link>
    </header>
  );
}

export default App;
