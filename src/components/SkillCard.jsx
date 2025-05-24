import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon-container">
        <div className="relative">
          <img
            src={skill.icon || "/placeholder.svg"}
            alt={skill.name}
            width={50}
            height={50}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="skill-info">
        <h3 className="skill-name">{skill.name}</h3>
        <div className="skill-level-container">
          <div
            className="skill-level-bar"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <span className="skill-level-text">{skill.level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;