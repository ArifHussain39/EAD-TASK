import { Routes, Route } from "react-router-dom";
import "./App.css";
import Characters from "./assets/Characters";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import CharacterDetails from "./assets/CharacterDetails";
import Search from "./assets/Search";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/:id" element={<CharacterDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
