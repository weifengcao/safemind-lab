// shortened for brevity
import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight, Github, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SUBSTACK_ESSAYS } from '../content/substack';

export default function Home() {
  return (
    <div>
      <SEO title="SafeMind Lab" description="Enterprise AI systems" />

      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold">SafeMind Lab</h1>
      </section>

      {/* Latest Essays */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Latest Essays</h2>
          <div className="space-y-10">
            {SUBSTACK_ESSAYS.map((post, i) => (
              <a key={i} href={post.url} target="_blank" className="block group">
                <h3 className="text-2xl font-bold group-hover:text-blue-600">{post.title}</h3>
                <p className="text-slate-500">{post.excerpt}</p>
                <div className="text-xs uppercase mt-2 flex items-center gap-2">
                  Read on Substack <ArrowUpRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <Link to="/blog">All Essays</Link>
      </section>
    </div>
  );
}
