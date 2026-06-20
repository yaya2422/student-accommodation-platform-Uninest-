import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import ListingDetails from "./pages/ListingDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;