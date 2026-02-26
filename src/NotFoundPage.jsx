import PageLayout from './components/PageLayout';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <PageLayout active="">
      <main className="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="not-found-link">Go back home</Link>
      </main>
    </PageLayout>
  );
}
