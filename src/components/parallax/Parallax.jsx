import "./parallax.scss";

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "about"
            ? "linear-gradient(to top, #48204d, #1a0c1c)"
            : "linear-gradient(to top, #1a0c1c, #48204d)",
      }}
    >
      <h1>{type === "about" ? "Get to know me" : "Projects I've done"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;
