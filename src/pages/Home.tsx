import { motion } from 'motion/react';
import { ChevronRight, Shield, Cpu, GitBranch, ArrowUpRight, Github, BarChart3, Workflow, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../content/blog';
import { projectSummaries } from '../content/projects';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 }
  };

  const featuredEssay = blogPosts[0];
  const secondaryEssays = blogPosts.slice(1, 3);

  return (
    <div className="flex flex-col">
      <SEO
        title="Research & Engineering for Enterprise AI"
        description="SafeMind Lab is a research and engineering initiative focused on governed enterprise AI systems, agent harnesses, and real-world investigation workloads."
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden text-center bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 px-4 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full inline-block">
              Research & Engineering Initiative
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8 max-w-5xl">
              Building governed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">enterprise AI systems</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-4xl mb-8 leading-relaxed font-light">
              SafeMind Lab explores how enterprise AI systems are designed, evaluated, and evolved under real-world constraints: security, auditability, latency, cost, policy, and human review.
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mb-12 leading-relaxed">
              The work is grounded in concrete engineering: agent harnesses, control planes, evaluation pipelines, and domain workloads such as SOC investigation and compliance review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/platform"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold shadow-xl shadow-blue-100 flex items-center gap-2 hover:bg-slate-800 transition-all"
              >
                <span>Harness & Control Plane</span>
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all"
              >
                View Field Workloads
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Essays */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <BookOpen size={14} /> Essays
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Latest Writing</h2>
              <p className="mt-4 text-lg text-slate-500 font-light leading-relaxed">
                Long-form notes on enterprise AI systems, governed agent execution, SOC triage architecture, and managed agent lifecycles.
              </p>
            </div>
            <Link to="/blog" className="text-blue-600 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest flex items-center">
              View all essays <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>

          {featuredEssay && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Link
                to={`/blog/${featuredEssay.slug}`}
                className="lg:col-span-2 p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest">Featured</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest">{featuredEssay.category}</span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest">{featuredEssay.readTime}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 group-hover:text-blue-600 transition-colors">
                  {featuredEssay.title}
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                  {featuredEssay.excerpt}
                </p>
                <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-900 group-hover:text-blue-600">
                  Read Essay <ArrowUpRight size={16} />
                </div>
              </Link>

              <div className="space-y-6">
                {secondaryEssays.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">{post.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-slate-900 group-hover:text-blue-600">
                      Read <ArrowUpRight size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          >
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-5">What We Actually Build</h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                SafeMind Lab is not only a research thesis. It is a working engineering effort to test how enterprise AI behaves when it has to operate safely, observably, and repeatably.
              </p>
            </motion.div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Shield size={22} />, title: 'Agent Harness', desc: 'A governed runtime that separates reasoning from authority, policy, state, and tool execution.' },
                { icon: <BarChart3 size={22} />, title: 'Evaluation Pipeline', desc: 'Metrics and review loops for correctness, evidence sufficiency, safety, latency, and cost.' },
                { icon: <Workflow size={22} />, title: 'Field Workloads', desc: 'SOC triage and compliance systems used as concrete workloads, not abstract demos.' },
                { icon: <GitBranch size={22} />, title: 'SaaS to Agentic Workflows', desc: 'Research into how existing enterprise workflows can be incrementally adapted into agent-assisted systems.' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-5 font-bold shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-extrabold mb-3 text-slate-900 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Questions */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Research Questions</h2>
            <p className="mt-4 text-lg text-slate-500 font-light leading-relaxed">
              The goal is practical innovation in enterprise workflow: understand where deterministic software should remain, where agents add value, and how the whole system can be measured and governed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Composition', desc: 'How should SaaS components, agentic components, humans, and tools be composed into reliable enterprise workflows?' },
              { title: 'Measurement', desc: 'How do we quantify accuracy, risk, cost, latency, and evidence quality across heterogeneous components?' },
              { title: 'Governance', desc: 'How should autonomous behavior be reviewed, versioned, approved, rolled out, and rolled back?' }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Safety */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Security & Safety by Design</h2>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                SafeMind means safety is engineered into the system boundary, not delegated to prompts. The harness controls identity, authority, context, actions, observability, and review.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Least-privilege agent and tool access',
                'Policy-based action gating before execution',
                'Secure context construction and memory access',
                'Audit logs, traces, and evidence provenance',
                'Evaluation-driven behavioral monitoring',
                'Human review for high-risk system changes'
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  <p className="text-slate-200 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Field Workloads</h2>
              <p className="mt-4 text-lg text-slate-500 font-light leading-relaxed">Concrete systems used to validate the harness under messy, high-stakes enterprise conditions.</p>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center text-blue-600 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors mb-2">
              Browse All <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projectSummaries.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                desc={project.desc}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="py-20 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">Reconfigurable Enterprise AI</h2>
          <p className="text-lg text-slate-500 mb-10 max-w-3xl mx-auto font-light">
            SafeMind Lab treats enterprise AI as a reconfigurable system: balancing deterministic software and agentic intelligence through measurement, feedback, and supervised control loops.
          </p>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-indigo-600 font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center transition-all group"
          >
            Read Design Notes
            <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-3xl bg-slate-900 text-white shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's connect.</h2>
            <p className="text-lg text-slate-300 mb-10 font-light">Open to discussing enterprise AI architecture, agent harness engineering, product security, and applied research collaborations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                Contact
              </Link>
              <a href="https://github.com/weifengcao/safemind-lab" className="px-10 py-4 bg-slate-800 border border-slate-700 rounded-lg flex items-center font-bold hover:bg-slate-700 transition-colors">
                <Github size={18} className="mr-2" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, desc, tags, link }: { title: string, desc: string, tags: string[], link: string }) {
  return (
    <Link to={link} className="group flex flex-col transition-all">
      <div className="aspect-[16/10] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden mb-8 shadow-sm group-hover:border-slate-300 transition-all">
        <div className="w-full h-full bg-gradient-to-tr from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <Cpu size={56} className="text-blue-200" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-blue-600 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-500 font-light leading-relaxed mb-6 line-clamp-2">{desc}</p>
      <div className="flex items-center font-bold text-xs uppercase tracking-widest text-slate-900 group-hover:text-blue-600 transition-all">
        Case Study <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
