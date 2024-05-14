import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="textContainer">
        <h2>Christine Tauy</h2>
        <h1>Web Developer</h1>
        <div className="buttons">
          <button>Projects</button>
          <button>Contact Me</button>
        </div>
        <img src="/scroll.png" alt="Scroll Icon" />
      </div>
      <div className="imageContainer">
        <img src="/Christine.jpg" alt="Christine"></img>
      </div>
    </div>
  );
};

export default Home;
