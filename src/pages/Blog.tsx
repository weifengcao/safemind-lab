import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { SUBSTACK_ESSAYS } from '../content/substack';

export default function Blog() {
  return (
    <div className="pb-24">
      <SEO 
        title="Essays" 
        description="Writing on enterprise AI systems, agent architecture, and governed execution."
      />

      <section className="pt-24 pb-20 border-b border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Essays</h1>
          <p className="text-xl text-slate-500 font-light italic leading-relaxed">
            Long-form writing on enterprise AI, agent systems, and architecture.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="space-y-16">
          {SUBSTACK_ESSAYS.map((post, idx) => (
            <motion.article key={idx} className="group">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex gap-4 mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                <h2 className="text-3xl font-extrabold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-lg text-slate-500 mb-6">
                  {post.excerpt}
                </p>

                <div className="text-xs font-bold uppercase flex items-center gap-2">
                  Read on Substack <ArrowUpRight size={16} />
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
