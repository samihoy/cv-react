import { Link } from 'react-router-dom';
import useEasterEgg from './useEasterEgg';

export default function HomePage() {
  useEasterEgg();
  return (
    <>
      <header className="top">
        <nav className="nav">
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/project">project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link className="easteregg" to="/easteregg">easteregg</Link></li>
        </nav>
      </header>

      <div id="easterEggModal" className="modal">
        <div className="modal-content">
          <span className="close">×</span>
          <h2>Rudeus Greyrat</h2>
        </div>
      </div>

      <div className="container">
        <div className="profile">
          <div className="profile_container">
            <div className="profile_img">
              <img src={`${import.meta.env.BASE_URL}images/profile-pic.jpg`} alt="Surpise" id="easterEgg" />
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
              <a className="downloadbtn" href="/Made upp Resume.pdf">Resume</a>
            </div>
          </div>
        </div>

        <div className="group-1">
          <div className="skills">
            <h3 className="title">Languages and Frameworks</h3>
            <ul className="skill_list description">
              <li>C# / .NET</li>
              <li>Python</li>
              <li>Html</li>
              <li>CSS</li>
              <li>React</li>
              <li>Entity Framework</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="ref">
            <h3 className="title">Refernce</h3>
            <div className="ref_item">
              <h4 className="ref_name">Pontus Gustavson</h4>
              <p><b>Madeup  companyname</b> <br />telephone number: 0707136087</p>
            </div>
            {/* <div className="ref_item">
              <h4 className="ref_name">Sebastion hammar</h4>
              <p><b>Madeup company name</b> <br />Telephone number:</p>
            </div> */}
          </div>

          <div className="edu">
            <h3 className="title">Education</h3>
            <div className="edu_item">
              <p className="item_pretitle">2024-2026</p>
              <h4 className="item_title">Chas Academy</h4>
              <p className="item_subtitle">.NET</p>
            </div>
          </div>
        </div>

        <div className="group-2">
          <div className="exp">
            <h3 className="title">Interests</h3>

            <div className="exp_item">
              <h4 className="item_title">Anime</h4>
              <p className="description">
                Huge anime fan, suffers from incurebal Iseka brain-root, dont wory it is not contagius (i dont think).
              </p>
              <p className="description">Symptoms: Will consume any Isekai related material regardles of quality AND insist it is good</p>
            </div>

            <div className="exp_item">
              <h4 className="item_title">Manga</h4>
              <p className="description">
                What can I say.... I'm a "cultured" person. <br />
                <span className="description">
                  Berserk and Yajjin Tensei is Peak fiction...
                </span>
              </p>
            </div>

            <div className="exp_item">
              <h4 className="item_title">Book</h4>
              <p className="description">
                Maby I should have started with this one, makes me seem smarter and less "weeb" like.<br />
                Science fiction is my cup of tea, "Hard sci-fi" at that.<br />
                What can I say, I'm the living embodiment of a stereotypical backend developer...
              </p>
            </div>
          </div>

          <div className="interest">
            <h3 className="title">Links</h3>
            <div className="interest_items">
              <i data-feather="book"></i> reading
              <i data-feather="music"></i> music
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="contact">
            <h3 className="title">contact</h3>
            <div className="contact_info">
              <p className="description easteregg">Porthansvägen 12</p>
              <p className="description">0707254421</p>
              <p className="description">brormaximillianlundberg@protonmail.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}