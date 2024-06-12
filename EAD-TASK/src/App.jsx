import { Routes, Route } from "react-router-dom";
import "./App.css";
import Characters from "./assets/Characters";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import CharacterDetails from "./assets/CharacterDetails";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
