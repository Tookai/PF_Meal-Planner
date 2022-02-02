import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Random from "./components/Random";
import Recette from "./components/Recette";
import Week from "./components/Week";
import Liste from "./components/Liste";
import Connection from "./components/Connection";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="" element={<Random jour="Ce soir on pourrait manger" plat="Pâte Carbonara" />} />
          <Route path="semaine" element={<Week />} />
          <Route path="liste" element={<Liste />} />
          <Route path="recette" element={<Recette />} />
          <Route path="connection" element={<Connection />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
