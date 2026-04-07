import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Firstmile from './Components/Firstmile'
import BlogList from './Components/BlogList'
import BlogPost from './Components/BlogPost'
import WriteBlog from './Components/WriteBlog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstmile />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/write-blog" element={<WriteBlog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
