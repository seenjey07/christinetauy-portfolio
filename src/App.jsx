import "./app.scss";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>About</section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <section>Projects</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
