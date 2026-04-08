import aboutPhoto from "../assets/images/profile/about-photo.png";
import SectionTitle from "./SectionTitle";
import SocialButtons from "./SocialButtons";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-image-box">
          <div className="animated-about-div-2"></div>
          <div className="animated-about-div"></div>
          <img src={aboutPhoto} alt="Nea portrait" />
        </div>

        <div className="about-container">
          <div className="about-text-box">
            <h3>I&apos;m Kathleen Nea Macaspac</h3>
            <br></br>
            <p>
              I&apos;m a graphic and UI/UX designer who focuses on{" "}
              <strong>
                scalability, responsive web design with fluid layouts, branding
                and identity, and visual design built on harmony, clarity, and
                purpose
              </strong>
              . I like creating work that not only looks good but feels
              consistent and works smoothly across different screens and ideas.
            </p>
            <br></br>
            <p>
              Whether I’m designing a logo, UI, or a poster, I blend creativity
              with clarity. I use tools that help me build efficiently while
              keeping everything intentional, clean, and a little fun — creating
              visual experiences that reflect both personality and purpose.
            </p>

            <SocialButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
