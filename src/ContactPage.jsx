import PageLayout from './components/PageLayout';
import './CSS/contact.css';

export default function ContactPage() {
  return (
    <PageLayout active="contact">
      <section className="contact-page">
        <div className="contact-hero-grid">
          <div className="contact-card contact-profile-card">
            <div className="contact-profile-image-wrap">
              <img
                src={`${import.meta.env.BASE_URL}images/profile-pic.jpg`}
                alt="Max Lundberg"
                className="contact-profile-image"
              />
            </div>
            <div className="contact-profile-text">
              <h1>Contact Max</h1>
              <p>
                Based in Stockholm (Bromma). Feel free to reach out for collaboration,
                internship opportunities, or project discussions.
              </p>
            </div>
          </div>

          <div className="contact-card contact-map-card">
            <h2>Area</h2>
            <div className="contact-map-frame">
              <iframe
                title="Map of Blackeberg, Bromma"
                src="https://www.google.com/maps?q=Blackeberg%20Bromma%20Stockholm&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="contact-card contact-message-card">
          <h2>Message / Contact Info</h2>
          <p>
            I am currently building my portfolio and backend/fullstack projects. If you want
            to get in touch, you can reach me using the details below.
          </p>
          <div className="contact-details-list">
            <p><strong>Phone:</strong> 0707254421</p>
            <p><strong>Email:</strong> brormaximillianlundberg@protonmail.com</p>
            <p><strong>Location:</strong> Blackeberg, Bromma, Stockholm</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
