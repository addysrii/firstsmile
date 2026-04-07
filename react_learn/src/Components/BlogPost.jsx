import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Firstmile.css';
import './BlogLayout.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://firstsmile.onrender.com/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setPost(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="blog-container" style={{ paddingTop: '120px', minHeight: '100vh', textAlign: 'center' }}>
        <p>Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-container" style={{ paddingTop: '120px', minHeight: '100vh', textAlign: 'center' }}>
        <nav>
          <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>first<span>mile</span></Link>
          <div className="nav-right">
            <Link to="/blog">back to blog</Link>
          </div>
        </nav>
        <h1 className="hero-headline">Post not found.</h1>
        <Link to="/blog" className="btn-primary" style={{ marginTop: '2rem' }}>Go back</Link>
      </div>
    );
  }

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
        <Link to="/blog" className="back-link">← back to all posts</Link>
        
        <div className="blog-meta" style={{ marginTop: '2rem' }}>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span>//</span>
          <span>{post.author}</span>
        </div>
        
        <h1 className="hero-headline" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginTop: '1rem', marginBottom: '2rem' }}>
          {post.title}
        </h1>
        
        <div className="blog-content">
          {post.content.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-logo">first<span>mile</span></div>
        <div className="footer-right">Kanpur, UP &nbsp;&nbsp; Pilot 2025 &nbsp;&nbsp; Built by Vanshika</div>
      </footer>
    </>
  );
};

export default BlogPost;
