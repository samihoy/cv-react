import { Link } from 'react-router-dom';
export default function AboutPage(){
    return (
        <>
<header className="top">
  <div className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link className="active" to="/about">About</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
  </div>
</header>

<div className="container">
  <div className="profile">
    <div className="profile_container">
      <div className="profile_img">
        <img alt="Surpise" src={`${import.meta.env.BASE_URL}images/profile-pic.jpg`} />
      </div>
      <div>
        <h1 className="profile_name">
          <span className="profile_name_firstname">Max</span>
          <span className="profile_name_lastname">Lundberg</span>
        </h1>
        <p className="profile_title">fullstack .NET Developer</p>
        <p className="description">
          Hi my Name is Max and im a Fullstack .NET developer with focude on system development and databases
        </p>
        <div>
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel repellat blanditiis neque nobis commodi eius porro, a amet fugit saepe exercitationem. Eaque quos deleniti, odit aspernatur quasi saepe asperiores! Quia!
        </div>
      </div>
    </div>
  </div>
</div>
</>
    );
}