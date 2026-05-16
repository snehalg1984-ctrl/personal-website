function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git", "MongoDB"];

  return (
    <section id="skills" className="glass">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill glass" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;