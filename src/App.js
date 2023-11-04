import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="list-none">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
