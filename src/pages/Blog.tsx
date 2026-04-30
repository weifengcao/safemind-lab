import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { blogPosts } from '../content/blog';

export default function Blog() {
  return (
    <div className="pb-24">
      <SEO
        title="Essays"
        description="Long-form writing on enterprise AI systems, governed agent architecture, SOC triage, evaluation, and auditability."
      />

      <section className="pt-24 pb-20 border-b border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Essays</h1>
          <p className="text-xl text-slate-500 font-light italic leading-relaxed">
            Professional notes on governed enterprise AI, investigation harnesses, and the operational boundary between reasoning and execution.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="space-y-16">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="flex items-center text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                    <Tag size={10} className="mr-2" /> {post.category}
                  </span>
                  <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Clock size={10} className="mr-2" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                  {post.title}
                </h2>

                <p className="text-lg text-slate-500 mb-6 leading-relaxed font-light">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-xs font-bold text-slate-900 uppercase tracking-widest group-hover:text-blue-600 transition-all">
                  Read Essay <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
