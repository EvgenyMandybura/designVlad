import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/projects";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
