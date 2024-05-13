import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Sidebar /> */}
      <div className="wrapper">
        <span>Christine Tauy</span>
        <div className="social">
          <a href="https://www.linkedin.com/in/christinerosalesprofile/">
            <img src="/linkedin.png" alt="linkedin"></img>
          </a>
          <a href="https://github.com/seenjey07">
            <img src="/github.png" alt="github"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
