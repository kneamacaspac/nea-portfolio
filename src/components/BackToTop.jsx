import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/backToTop.css";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    showButton && (
      <button
        className="back-to-top"
        onClick={goToTop}
        aria-label="Go back to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTop;
