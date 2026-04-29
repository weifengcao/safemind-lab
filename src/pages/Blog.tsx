import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../content/blog';

export default function Blog() {
  return (
    <div className="pb-24">
      <SEO 
        title="Engineering Blog" 
        description="Deep dives into agentic systems and enterprise AI architectures."
      />

      <section className="pt-24 pb-20 border-b border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Thoughts on Engineering</h1>
          <p className="text-xl text-slate-500 font-light italic leading-relaxed">
            Systems thinking for enterprise AI and agent harness design.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="space-y-16">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article key={post.slug} className="group">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex gap-4 mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                <h2 className="text-3xl font-extrabold mb-4 text-slate-900">
                  {post.title}
                </h2>

                <p className="text-lg text-slate-500 mb-6">
                  {post.excerpt}
                </p>

                <div className="text-xs font-bold uppercase">
                  Read Essay <ArrowUpRight size={16} />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
