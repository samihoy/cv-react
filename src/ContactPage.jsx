import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
    <>
      <header className="top">
        <div className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link className="active" to="/contact">Contact</Link></li>
        </div>
      </header>

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

      <div></div>
    </>
  );
}
