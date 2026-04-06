import SectionTitle from "./SectionTitle";
import SkillBar from "./SkillBar";
import { designTools, programmingSkills, otherSoftware } from "../data/skills";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <SectionTitle title="My Skills and Tools" />

      <div className="skills-card glass">
        <p className="skills-intro">
          I specialize in graphic design and front-end development, combining
          creativity with functionality to build clean and interactive user
          experiences. I’m highly comfortable using Canva, Figma, and Photoshop,
          and I have strong foundational skills in HTML, CSS, JavaScript, and
          React. I continuously improve my work by practicing and building
          projects that refine both my design and coding skills.
        </p>

        <div className="skills-grid">
          <div className="design-column">
            <h3 className="skills-subtitle">Design Tools:</h3>

            <div className="skill-list">
              {designTools.map((tool) => (
                <SkillBar
                  key={tool.id}
                  icon={tool.icon}
                  name={tool.name}
                  level={tool.level}
                />
              ))}
            </div>
          </div>

          <div className="language-column">
            <div className="skills-group">
              <h3 className="skills-subtitle">Front-end Development:</h3>

              <div className="logo-grid">
                {programmingSkills.map((skill) => (
                  <div key={skill.id} className="logo-card">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-group">
              <h3 className="skills-subtitle">Other Software:</h3>

              <div className="other-software-row">
                <div className="logo-grid other-software-grid">
                  {otherSoftware.map((software) => (
                    <div key={software.id} className="logo-card">
                      <img src={software.icon} alt={software.name} />
                      <span>{software.name}</span>
                    </div>
                  ))}
                </div>

                <p className="software-text">
                  For productivity and collaboration, I use{" "}
                  <strong>Notion</strong> and{" "}
                  <strong>Microsoft Applications</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
