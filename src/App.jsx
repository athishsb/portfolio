import "./App.css";
import Certificates from "./components/Certificates";
import Divider from "./components/Divider";
import IntroComponent from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <IntroComponent />
      <Divider />
      <Timeline />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Certificates />
    </>
  );
}

export default App;
