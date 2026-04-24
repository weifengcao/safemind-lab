import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Harness', path: '/platform' },
    { name: 'Workloads', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-blue-600 selection:text-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white transform rotate-45"></div>
              </div>
              <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors">
                SAFEMIND<span className="text-blue-600">LAB</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                   className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600",
                    location.pathname === link.path ? "text-blue-600" : "text-slate-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://github.com/safemind-lab" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-500 hover:text-slate-900 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-slate-100 bg-white"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "block px-3 py-4 text-sm font-bold uppercase tracking-widest rounded-md",
                      location.pathname === link.path ? "bg-slate-50 text-blue-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <a 
                  href="https://github.com/safemind-lab" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center px-3 py-4 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900"
                >
                  <Github size={18} className="mr-2" /> GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="px-4 sm:px-6 lg:px-12 py-10 border-t border-slate-100 bg-white flex flex-col md:flex-row items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span>Systems Operational</span>
          </div>
          <Link to="/platform" className="hover:text-slate-600 cursor-pointer">Harness</Link>
          <Link to="/blog" className="hover:text-slate-600 cursor-pointer">Writing</Link>
          <Link to="/about" className="hover:text-slate-600 cursor-pointer">About</Link>
        </div>
        <div>
          © {new Date().getFullYear()} SAFEMIND LAB. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
