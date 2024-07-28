import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./public/NavBar";
import Home from "./pages/home/Home";
import NoPage from "./pages/no_page/NoPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
