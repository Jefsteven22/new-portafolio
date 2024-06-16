import HomeCarousel from "./Home/HomeCarousel";
import "./styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <video src="/videos/home_mobile.mp4" autoPlay muted loop />
      <article className="home__color">
        <HomeCarousel />
      </article>
    </section>
  );
};

export default Home;
