import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export const BLOG_POSTS = [
  {
    slug: "enterprise-ai-is-a-systems-problem",
    title: "Enterprise AI Is Not a Model Problem — It’s a Systems Problem",
    excerpt: "Why production AI agents need orchestration, state, policy, evaluation, memory, and feedback loops — not just better prompts or larger models.",
    date: "2026-04-29",
    readTime: "11 min read",
    category: "Enterprise AI"
  },
  {
    slug: "context-engineering-vs-harness-engineering",
    title: "Context Engineering vs. Harness Engineering",
    excerpt: "Why building a better harness is more impactful than endlessly tweaking prompt context windows.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Architecture"
  },
  {
    slug: "what-breaks-first-in-agentic-systems",
    title: "What Breaks First in Agentic Systems",
    excerpt: "Lessons learned from deploying autonomous agents in production security environments.",
    date: "2024-02-28",
    readTime: "12 min read",
    category: "Production"
  },
  {
    slug: "policy-and-auditability-in-ai-workflows",
    title: "Policy and Auditability in AI Workflows",
    excerpt: "How to design agent systems that can be trusted by compliance and legal teams.",
    date: "2024-02-10",
    readTime: "10 min read",
    category: "Governance"
  }
];

export default function Blog() {
  return (
    <div className="pb-24">
      <SEO 
        title="Engineering Blog" 
        description="Deep dives into agentic systems, infrastructure, and the design principles of SafeMind Lab. Exploring the intersection of LLMs and production infrastructure."
      />
      <section className="pt-24 pb-20 border-b border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Thoughts on Engineering</h1>
          <p className="text-xl text-slate-500 font-light italic leading-relaxed">Deep dives into agentic systems, infrastructure, and the design principles of SafeMind Lab.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="space-y-16">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
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
