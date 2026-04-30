import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/src/components/layout/Layout';
import Home from '@/src/pages/Home';
import Platform from '@/src/pages/Platform';
import Projects from '@/src/pages/Projects';
import ProjectSOC from '@/src/pages/ProjectSOC';
import ProjectFintech from '@/src/pages/ProjectFintech';
import Blog from '@/src/pages/Blog';
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
          <Route path="projects/soc-agent" element={<ProjectSOC />} />
          <Route path="projects/fintech-compliance" element={<ProjectFintech />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Navigate to="/blog" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
