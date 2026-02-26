import PageLayout from './components/PageLayout';
import './CSS/ai-me.css';

export default function AIMePage() {
  return (
    <PageLayout active="ai-me">
      <div className="ai-me-page">
        <h1>AI-Me</h1>
        <p className="description">Coming soon...</p>
      </div>
    </PageLayout>
  );
}
