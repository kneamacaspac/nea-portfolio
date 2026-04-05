import SectionTitle from "./SectionTitle";
import SkillBar from "./SkillBar";
import { designTools, programmingSkills, otherSoftware } from "../data/skills";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <SectionTitle title="My Skills and Tools" />

      <div className="skills-card">
        <p className="skills-intro">
          I create my designs using different apps and websites to maximize
          efficiency and resourcefulness. My main tools are focused on design,
          coding, and productivity.
        </p>

        <div className="skills-grid">
          <div className="skills-column">
            <h3>Design Tools</h3>
            {designTools.map((tool) => (
              <SkillBar
                key={tool.id}
                icon={tool.icon}
                name={tool.name}
                level={tool.level}
              />
            ))}
          </div>

          <div className="skills-column">
            <h3>Programming Languages</h3>
            <div className="logo-grid">
              {programmingSkills.map((skill) => (
                <div key={skill.id} className="logo-card">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <h3>Other Software</h3>
            <div className="logo-grid">
              {otherSoftware.map((software) => (
                <div key={software.id} className="logo-card">
                  <img src={software.icon} alt={software.name} />
                  <span>{software.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
