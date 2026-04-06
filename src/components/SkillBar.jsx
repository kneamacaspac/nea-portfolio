function SkillBar({ icon, name, level }) {
  return (
    <div className="skill-bar-card">
      <div className="skill-bar-top">
        <img src={icon} alt={name} className="skill-icon" />

        <div className="skill-info">
          <span className="skill-name">{name}</span>

          <div className="skill-bar-track">
            <div
              className="skill-bar-fill"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
