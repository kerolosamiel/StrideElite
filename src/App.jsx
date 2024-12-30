import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./public/NavBar";
import Footer from "./public/Footer";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import NoPage from "./pages/no_page/NoPage";

function App() {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState(
    window.location.pathname.substring(1)
  );

  const [saveIDs, setSaveIDs] = useState([]);

  const handleFavClick = (id) => {
    const ids = saveIDs.findIndex((savedID) => savedID === id);
    console.log(ids);
    if (ids === -1) {
      setSaveIDs((prevIds) => [...prevIds, id]);
    } else if (ids >= 0) {
      setSaveIDs(saveIDs.filter((ids) => ids !== id));
    }
  };

  // Function to update the active link based on user interaction
  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  window.addEventListener("popstate", () =>
    handleActiveLink(window.location.pathname.substring(1))
  );

  return (
    <BrowserRouter>
      <NavBar
        activeLink={activeLink}
        handleActiveLink={handleActiveLink}
        saveIDs={saveIDs}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleActiveLink={handleActiveLink}
              handleFavClick={handleFavClick}
            />
          }
        />

        {/* <Route path="products" element={<Products />} /> */}

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
