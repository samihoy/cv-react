import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CVPage() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch('/cvData.json')
      .then((res) => res.json())
      .then(setCvData)
      .catch(console.error);
  }, []);

  if (!cvData) return <p>Loading CV...</p>;

  return (
    <>
      <header className="top">
        <div className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link className="active" to="/cv">CV</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>

        <div className="profile">
          <a className="downloadbtn" href="/Made upp Resume.pdf">Resume Download</a>
        </div>

        <h1>Resume</h1>

        <section className="resume-content">
          <h2>{cvData.name}</h2>
          <p>Age: {cvData.age} | Email: {cvData.email} | Phone: {cvData.phone}</p>

          <h3>Professional Summary</h3>
          <p>{cvData.summary}</p>

          <h3>Work Experience</h3>
          <ul>
            {cvData.workExperience.map((job, i) => (
              <li key={i}><strong>{job.title}</strong> | {job.company} | {job.years}</li>
            ))}
          </ul>

          <h3>Education</h3>
          <p>{cvData.education.degree} | {cvData.education.school} | {cvData.education.years}</p>

          <h3>Key Skills</h3>
          <ul>
            {cvData.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </section>
      </header>

      <div>Additional information</div>
    </>
  );
}