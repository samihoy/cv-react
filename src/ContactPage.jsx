import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
    <>
      <header className="top">
        <nav>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link className='active' to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blogg">Blogg</Link></li>
            <li><Link to="/easteregg">easteregg</Link></li>
          </ul>
        </nav>
      </header>

      <footer className="footer">
        <div className="contact">
  
          <div className="contact_info">
            <p className="description easteregg">Porthansvägen 12</p>
            <p className="description">0707254421</p>
            <p className="description">brormaximillianlundberg@protonmail.com</p>
          </div>
        </div>
      </footer>

      <div></div>
    </>
  );
}
