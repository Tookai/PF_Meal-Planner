import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Random from "./components/Random";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="" element={<Random />} />
          <Route path="recette" element={<Accueil />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
