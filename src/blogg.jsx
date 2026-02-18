import { Link } from "react-router-dom";
import  "./blogg.css";

export default function Blogg(){

    return(
    <>
        <header className="top">
            <div className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link className="active" to='/blogg'>Blogg</Link></li>
            </div>
        </header>

<div className="box">lalala</div>





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
    
    
    
    </>    

    );
}
