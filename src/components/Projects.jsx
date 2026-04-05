import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";
import projects from "../data/projects";
import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <SectionTitle title="My Projects" />

      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={`0${index + 1}`}
          />
        ))}
      </div>

      <ProjectSlider />
    </section>
  );
}

export default Projects;
