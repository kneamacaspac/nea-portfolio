import aboutPhoto from "../assets/images/profile/about-photo.png";
import SectionTitle from "./SectionTitle";
import SocialButtons from "./SocialButtons";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-image-box">
          <img src={aboutPhoto} alt="Nea portrait" />
        </div>

        <div className="about-container">
          <div className="about-text-box">
            <h3>I&apos;m Kathleen Nea Macaspac</h3>
            <br></br>
            <p>
              I&apos;m a graphic designer passionate about digitalizing
              imaginations and translating ideas into clean and creative
              visuals. Whether I&apos;m designing a logo, UI, or a poster, I aim
              to blend creativity with clarity using tools that help me build
              efficiently and with intention.
            </p>
            <br></br>
            <p>
              I&apos;m a student with a specialization in Multimedia Arts and I
              enjoy creating visual experiences that reflect both personality
              and purpose.
            </p>

            <SocialButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
