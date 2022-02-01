import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Random from "./components/Random";
import Recette from "./components/Recette";
import Week from "./components/Week";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="" element={<Random jour="Ce soir on pourrait manger" plat="Pâte Carbonara" />} />
          <Route path="week" element={<Week />} />
          <Route path="recette" element={<Recette />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
