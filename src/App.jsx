import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./public/NavBar";
import Home from "./pages/home/Home";
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
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={<NoPage handleActiveLink={handleActiveLink} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
