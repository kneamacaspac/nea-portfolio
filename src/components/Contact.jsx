import SectionTitle from "./SectionTitle";
import SocialButtons from "./SocialButtons";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <SectionTitle title="Contact Me" />
      <div className="contact-box">
        <SocialButtons />
      </div>
    </section>
  );
}

export default Contact;
