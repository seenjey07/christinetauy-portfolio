import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="About">Parallax</section>
      <section>About</section>
      <section id="Projects">Parallax</section>
      <section>Projects</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
