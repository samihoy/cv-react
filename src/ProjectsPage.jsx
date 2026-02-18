import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://api.github.com/users/samihoy/repos')
      .then(res => res.json())
.then(data => {
  setTimeout(() => {
    setRepos(data);
    setLoading(false);
  }, 2000);
})
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header className="top">
        <nav>
          <ul className="nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link className='active' to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blogg">Blogg</Link></li>
            <li><Link to="/easteregg">easteregg</Link></li>
          </ul>
        </nav>
      </header>

      <div className="projects-container">
        {loading ? (
          <p className="loading-text">Loading GitHub projects...</p>
        ) : (
          repos.map(repo => (
            <div key={repo.id} className="project-card">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description provided"}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
}