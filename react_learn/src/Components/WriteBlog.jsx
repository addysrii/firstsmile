import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Firstmile.css';
import './BlogLayout.css';

const WriteBlog = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, excerpt, content, author })
      });
      if (response.ok) {
        navigate('/blog');
      } else {
        alert('Failed to publish blog');
      }
    } catch (err) {
      alert('Error connecting to backend');
      console.error(err);
    }
  };

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>first<span>mile</span></Link>
        <div className="nav-right">
          <Link to="/blog">back to blog</Link>
          <Link to="/">home</Link>
        </div>
      </nav>

      <div className="blog-container" style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem', maxWidth: '800px' }}>
        <h1 className="hero-headline" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>Write a New Post</h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              required 
              style={{ width: '100%', padding: '0.75rem', fontFamily: 'var(--sans)', fontSize: '1rem', border: '1px solid var(--border)', background: 'var(--warm-white)', color: 'var(--black)' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>Author</label>
            <input 
              type="text" 
              value={author} 
              onChange={e => setAuthor(e.target.value)} 
              required 
              style={{ width: '100%', padding: '0.75rem', fontFamily: 'var(--sans)', fontSize: '1rem', border: '1px solid var(--border)', background: 'var(--warm-white)', color: 'var(--black)' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>Excerpt (Optional)</label>
            <textarea 
              value={excerpt} 
              onChange={e => setExcerpt(e.target.value)} 
              rows="2"
              style={{ width: '100%', padding: '0.75rem', fontFamily: 'var(--sans)', fontSize: '1rem', border: '1px solid var(--border)', background: 'var(--warm-white)', color: 'var(--black)', resize: 'vertical' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>Content</label>
            <textarea 
              value={content} 
              onChange={e => setContent(e.target.value)} 
              required 
              rows="10"
              style={{ width: '100%', padding: '0.75rem', fontFamily: 'var(--sans)', fontSize: '1rem', border: '1px solid var(--border)', background: 'var(--warm-white)', color: 'var(--black)', resize: 'vertical' }}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', cursor: 'pointer', border: 'none' }}>
            Publish Post
          </button>
        </form>
      </div>

      <footer>
        <div className="footer-logo">first<span>mile</span></div>
        <div className="footer-right">Kanpur, UP &nbsp;&nbsp; Pilot 2025 &nbsp;&nbsp; Built by Vanshika</div>
      </footer>
    </>
  );
};

export default WriteBlog;
