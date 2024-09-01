import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./public/NavBar";
import Footer from "./public/Footer";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import NoPage from "./pages/no_page/NoPage";
import { useState } from "react";

function App() {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState(
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.substring(1)
  );

  // Function to update the active link based on user interaction
  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <BrowserRouter>
      <NavBar activeLink={activeLink} handleActiveLink={handleActiveLink} />
      <Routes>
        <Route
          path="/"
          element={<Home handleActiveLink={handleActiveLink} />}
        />

        <Route path="products" element={<Products />} />

        <Route
          path="*"
          element={<NoPage handleActiveLink={handleActiveLink} />}
        />
      </Routes>
      <Footer handleActiveLink={handleActiveLink} />
    </BrowserRouter>
  );
}

export default App;
