export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        style={{ objectPosition: project.position || 'center' }}
      />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}{' '}
      </div>

      <div className="project-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            {project.github ? 'Live' : 'Case Study'}
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </article>
  );
}
