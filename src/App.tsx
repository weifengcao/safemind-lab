import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/src/components/layout/Layout';
import Home from '@/src/pages/Home';
import Platform from '@/src/pages/Platform';
import Projects from '@/src/pages/Projects';
import ProjectFintech from '@/src/pages/ProjectFintech';
import Blog from '@/src/pages/Blog';
import BlogPost from '@/src/pages/BlogPost';
import About from '@/src/pages/About';
import Contact from '@/src/pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="platform" element={<Platform />} />
          <Route path="projects" element={<Projects />} />

          <Route path="projects/fintech-compliance" element={<ProjectFintech />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
