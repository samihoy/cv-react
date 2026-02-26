import Header from './Header';
import Footer from './Footer';

export default function PageLayout({ active, children }) {
  return (
    <div className="page-shell">
      <Header active={active} />
      <div className="page-main">{children}</div>
      <Footer />
    </div>
  );
}
