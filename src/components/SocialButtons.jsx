import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import socials from "../data/socials";

function SocialButtons() {
  function getIcon(iconName) {
    switch (iconName) {
      case "facebook":
        return <FaFacebookF />;
      case "github":
        return <FaGithub />;
      case "instagram":
        return <FaInstagram />;
      case "email":
        return <MdEmail />;
      case "linkedin":
        return <FaLinkedinIn />;
      default:
        return null;
    }
  }

  return (
    <div className="social-buttons">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          className="social-btn"
        >
          {getIcon(social.icon)}
        </a>
      ))}
    </div>
  );
}

export default SocialButtons;
