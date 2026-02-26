import PageLayout from './components/PageLayout';
import './CSS/blogg.css';

export default function Blogg() {
  return (
    <PageLayout active="blogg">
      <div className="blogg-layout">
        <div className="blogg-main-wrap">
          <div className="blogg-container">
            <article className="blogg-post">
              <header className="blogg-post-header">
                <h1 className="blogg-post-title">Learning Programming and Loving It</h1>
              </header>

              <div className="blogg-sep" />

              <div className="blogg-post-body">
                <p>
                  I started learning programming seriously, and it quickly became one of the most fun and rewarding things I have ever done.
                  There&apos;s something addictive about building something from nothing — a feature, a page, a full app — and then refining it until it feels right.
                </p>
                <p>
                  This blog is where I&apos;ll document my journey: what I&apos;m learning, what I&apos;m building, what I struggle with, and what finally clicks.
                  I&apos;ll probably also write about my future LIA (internship) experiences and how it goes in real life.
                </p>
                <p>
                  If you&apos;re into programming, computers, science, anime, and plant stuff (gardening), you&apos;ll probably enjoy my posts.
                  More coming soon 🙂
                </p>
              </div>

              <footer className="blogg-post-footer">
                <div className="blogg-tags">
                  <span className="blogg-tag">programming</span>
                  <span className="blogg-tag">learning</span>
                  <span className="blogg-tag">lia</span>
                  <span className="blogg-tag">life</span>
                </div>

                <div className="blogg-post-meta bottom">
                  <span>2026-02-25</span>
                  <span className="dot">•</span>
                  <span>Stockholm</span>
                  <span className="dot">•</span>
                  <span>3 min read</span>
                </div>
              </footer>
            </article>
          </div>
        </div>

        <aside className="blogg-aside">
          <div className="blogg-card">
            <img
              className="blogg-author-img"
              src={`${import.meta.env.BASE_URL}images/profile-pic.jpg`}
              alt="Max"
            />

            <div className="blogg-sep small" />

            <p className="blogg-card-text">
              This is my blog. I use it to document all the fun stuff I do and my hobbies/interests.
              If you like programming, computers, science, anime and plant stuff (gardening) you&apos;ll have fun reading my posts :)
            </p>

            <div className="blogg-sep small" />

            <div className="blogg-stats">
              <div className="blogg-stat-row">
                <span>Posts</span>
                <span>1</span>
              </div>
              <div className="blogg-stat-row">
                <span>Tags</span>
                <span>4</span>
              </div>
            </div>

            <div className="blogg-tags aside">
              <span className="blogg-tag">programming</span>
              <span className="blogg-tag">.NET</span>
              <span className="blogg-tag">react</span>
              <span className="blogg-tag">plants</span>
            </div>
          </div>
        </aside>
      </div>
    </PageLayout>
  );
}
