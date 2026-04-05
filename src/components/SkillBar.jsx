function SkillBar({ icon, name, level }) {
  return (
    <div className="skill-bar-card">
      <div className="skill-bar-top">
        <img src={icon} alt={name} className="skill-icon" />
        <span>{name}</span>
      </div>

      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

export default SkillBar;
