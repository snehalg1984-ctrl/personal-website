function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "React portfolio with glassmorphism UI"
    },
    {
      title: "Weather App",
      desc: "Live weather using API"
    },
    {
      title: "To-Do App",
      desc: "Task manager with local storage"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((p, i) => (
        <div key={i} className="card glass">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;