import { useState } from 'react';
import PageLayout from './components/PageLayout';
import './CSS/ai-me.css';

export default function AIMePage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) return;

    setLoading(true);
    setError('');
    setMessage('');

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmedMessage }
    ]);

    try {
      const response = await fetch('https://max-backend-hzh5b5dacnghcsfb.canadacentral-01.azurewebsites.net/api/Chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: trimmedMessage })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }

      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: data.reply.trim() }
      ]);
    } catch {
      setError('Could not connect to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout active="ai-me">
      <div className="ai-me-page">
        <h1>AI-Me</h1>
        <p className="description">Ask me something</p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Write your question here..."
          rows="6"
        />

        <button onClick={sendMessage} disabled={loading}>
          {loading ? 'Thinking...' : 'Send'}
        </button>

        {error && <p className="error">{error}</p>}

        {messages.length > 0 && (
          <div className="reply-box">
            <h2>Chat</h2>

            {messages.map((item, index) => (
              <div
                key={index}
                className={item.role === 'user' ? 'chat-message user-message' : 'chat-message ai-message'}
              >
                <h3>{item.role === 'user' ? 'You' : 'AI-Me'}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}