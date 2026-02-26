import PageLayout from './components/PageLayout';
import { featuredProjects } from './data/projects';
import './CSS/projects.css';

export default function ProjectsPage() {
  return (
    <PageLayout active="project">

      <main className="projects-page">
        <section className="projects-intro">
          <h1>Featured Projects</h1>
          <p>
            A selected set of projects I want to showcase. Click any project card or button to open the repository.
          </p>
        </section>

        <section className="projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <a
                className="project-card-link"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-card-header">
                  <h2>{project.title}</h2>
                  <span className="project-status">{project.status}</span>
                </div>

                <div className="project-card-body">
                  <p className="project-description">{project.description}</p>

                  <ul className="project-tech-list">
                  {project.tech.map((techItem) => (
                    <li key={`${project.id}-${techItem}`}>{techItem}</li>
                  ))}
                  </ul>
                </div>
              </a>

              <div className="project-actions">
                <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub Repo</a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>

    </PageLayout>
  );
}
