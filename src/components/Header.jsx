import { Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/about', label: 'About Max', key: 'about' },
  { to: '/cv', label: 'CV', key: 'cv' },
  { to: '/project', label: 'Project', key: 'project' },
  { to: '/ai-me', label: 'AI-Me', key: 'ai-me' },
  { to: '/blogg', label: 'Blogg', key: 'blogg' },
  { to: '/contact', label: 'Contact', key: 'contact' }
];

export default function Header({ active }) {
  return (
    <header className="top">
      <nav>
        <ul className="nav">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link className={active === item.key ? 'active' : ''} to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
