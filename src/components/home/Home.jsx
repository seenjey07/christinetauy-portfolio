import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="textContainer">
          <h2>CHRISTINE TAUY</h2>
          <h1>Web Developer</h1>
          <div className="buttons">
            <button>My Projects</button>
            <button>Contact Me</button>
          </div>
          <img className="scroll" src="/scroll.png" alt="Scroll Icon" />
        </div>
      </div>
      <div className="imageContainer">
        <img className="myPhoto" src="/Christine.jpg" alt="Christine"></img>
      </div>
    </div>
  );
};

export default Home;
