import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>About</section>
      <section>Parallax</section>
      <section>Projects</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
