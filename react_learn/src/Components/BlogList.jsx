import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Firstmile.css';
import './BlogLayout.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://firstsmile.onrender.com/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <nav>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>first<span>mile</span></Link>
        <div className="nav-right">
          <Link to="/">home</Link>
          <Link to="/write-blog" className="nav-apply">write post</Link>
        </div>
      </nav>

      <div className="blog-container" style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem' }}>
        <div className="section-label" style={{ marginBottom: '2rem' }}>// journal</div>
        <h1 className="hero-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '3rem' }}>
          Thoughts on<br /><em>building.</em>
        </h1>

        {loading ? (
          <p>Loading posts...</p>
        ) : blogs.length === 0 ? (
          <p>No posts available yet. Be the first to write one!</p>
        ) : (
          <div className="blog-list">
            {blogs.map((post) => (
              <Link to={`/blog/${post._id}`} key={post._id} className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-meta">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>//</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-readmore">read post →</div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer>
        <div className="footer-logo">first<span>mile</span></div>
        <div className="footer-right">Kanpur, UP &nbsp;&nbsp; Pilot 2025 &nbsp;&nbsp; Built by Vanshika</div>
      </footer>
    </>
  );
};

export default BlogList;
