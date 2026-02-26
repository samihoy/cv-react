import PageLayout from './components/PageLayout';
import "./CSS/CVpage.css";

export default function CVPage() {
  return (
    <PageLayout active="cv">

      <br />

      <main>
        <section className="resume-content">
          <h1>Ressume</h1>

          <h2>Max Lundberg</h2>
          <p>Age: 36  |  Email: brormaximillianlundberg@protonmail.com  |  Phone: 070 725 44 21</p>

          <h3>Professional Summary</h3>
          <p>.NET C# Developer with focus on system development and databases
          <p>Huge computor Nerd </p>
          <p>Have previusly worked in Security related business</p>
          </p>

          <h3>Key Skills</h3>
          <ul>
            <li><strong>Languages</strong></li>
            
            <p>C#  |  SQL  |  Python  |  Javascript</p>
            <p>HTML  |  CSS</p>
  
            <br />
            <li><strong>Frameworks and Stacks</strong></li>
            <p>Azure  |  Entity Framework  |  React  

            <br />MVC  |  Blazor</p>
            <br />
            <li><strong>Other skills and tools im familiar with</strong></li>
            <p>Linux  |  Docker  |  Yaml  | Bash</p>
            <p>ADO | Databases setup and migrations  |  SystemDevelopment  </p>
            <br />
          </ul>

          <h3>Work Experience</h3>
          <ul>
          <li><strong>Consultant</strong> | Adamantium Security | 20011–2016</li>
          <li><strong>Consultant</strong> | PSG Bevakning | 2015–2025</li>
          </ul>

          <h3>References</h3>
          <ul>
            <li>Aldor Besher, Chas Academy E-post: aldor.besher@qlok.se, Tel: 076 697 20 30</li>
            <li>Pontus Gustavsson, PSG Bevakning Tel: +46 70 713 60 87</li>
          </ul>

          <h3>Education</h3>
          <p>Business Administration | Cybergymnasiet | 2005–2008</p>
          <p>Fullstack .NET | Chas Academy | 2024-2026</p>

  
        </section>
      </main>

      <div>Additional information</div>

    </PageLayout>
  );
}

{/*
// const [cvData, setCvData] = useState(null);

// useEffect
// (
//   () => 
//   {
//     const base = import.meta.env.BASE_URL;
//     fetch(`${base}cvData.json`)
//       .then((res) => res.json())
//       .then(data => setCvData(data))
//       .catch(console.error);
//   }, 
//   []
// );

//   if (!cvData) return <p>Loading CV...</p>;

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
        </section> */}



