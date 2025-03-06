import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Certificates from "./components/Certificates";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
