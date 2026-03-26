export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} ${project.github ? 'live demo' : 'case study'}`}
        >
          <img
            src={project.image}
            alt={`Preview of ${project.title}`}
            style={{ objectPosition: project.position || 'center' }}
          />
        </a>
      )}

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="tech">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}{' '}
      </div>

      <div className="project-links">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} ${project.github ? 'live demo' : 'case study'}`}
          >
            {project.github ? 'Live' : 'Case Study'}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code`}
          >
            Code
          </a>
        )}
      </div>
    </article>
  );
}
