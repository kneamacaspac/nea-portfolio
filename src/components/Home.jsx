import heroPhoto from "../assets/images/profile/hero-photo.png";
import InfiniteSlider from "./InfiniteSlider";
import "../styles/home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-overlay">
        <div className="home-content">
          <div className="home-image-wrapper">
            <img src={heroPhoto} alt="Nea" className="home-image" />
          </div>
          <div className="home-text">
            <h1>Hi, I&apos;m Nea!</h1>

            <div className="home-right">
              <p>
                Explore my journey in digital creation and graphic designs.
                Enjoy the visuals and experience my visions.
              </p>
              <a href="#contact" className="contact-button">
                Contact Me
              </a>
            </div>

            <div className="home-left">
              <p>
                I’m a Graphic and UI/UX Designer and a Front-end Developer who
                enjoys turning ideas into clean, interactive experiences.
              </p>
            </div>
          </div>
        </div>

        <InfiniteSlider />
      </div>
    </section>
  );
}

export default Home;
