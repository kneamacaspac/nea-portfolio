import { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({ number, project }) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <motion.div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.1 }}
    >
      <div className="project-number">{number}</div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      {isHovering && (
        <motion.img
          src={project.image}
          alt={project.title}
          className="hover-preview"
          style={{
            top: position.y + 20,
            left: position.x + 20,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}

export default ProjectCard;
