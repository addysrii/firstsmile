const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://adityasrivastavatv_db_user:8L9HJ3OYqqsjpaXA@cluster0.4tfacii.mongodb.net/?appName=Cluster0', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB Firstmile database'))
  .catch(err => console.error('MongoDB connection error:', err));

const blogSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

// GET all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// GET single blog
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// POST new blog
app.post('/api/blogs', async (req, res) => {
  const { title, excerpt, content, author } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const newBlog = new Blog({
      title,
      excerpt: excerpt || content.substring(0, 100) + '...',
      content,
      author: author || 'Anonymous',
    });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
