import "./projects.scss";

const items = [
  {
    id: 1,
    title: "Tic-Tac-Toe",
    description:
      "While learning about Javascript, Grids, and Flex, I created this site as one of our projects: an interactive Tic-Tac-Toe game that brings the classic 2-player challenge to life. I used CSS for styling.",
    img: "https://i.ibb.co/w7kVLgk/image.png",
  },
  {
    id: 2,
    title: "Baking App ~ Prosperity Bank",
    description:
      "This was one of my first projects while learning React. It is a banking application that enables users to create accounts and manage their finances. It utilizes CSS for a polished visual presentation. The app provides users with an intuitive dashboard featuring tabs for financial transactions.",
    img: "https://i.ibb.co/TLrMZtr/image.png",
  },
  {
    id: 3,
    title: "Weather App ~ WeatherPulse",
    description:
      "A sleek and responsive weather application built with React and styled using Tailwind CSS. It fetches real-time weather data from an API and displays the current temperature, weather conditions, and a 5-day forecast for any searched location. Designed for ease of use, it offers a clean and intuitive user interface for checking the weather quickly and efficiently.",
    img: "https://img.freepik.com/free-vector/collection-cartoon-weather-signs_79603-1806.jpg?t=st=1716902003~exp=1716905603~hmac=3ac5019995f07fa7418d10103e9d8ff2ff77f294cf310dd29633774143ff7801&w=826",
  },
];

const EachProject = ({ item }) => {
  return (
    <section>
      {item.title}
      <img src={item.img} alt={item.title} />
    </section>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>
      {items.map((item) => (
        <EachProject key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Projects;
