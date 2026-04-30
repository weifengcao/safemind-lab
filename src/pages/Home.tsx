import { motion } from 'motion/react';
import { ChevronRight, Shield, Cpu, ArrowUpRight, Github, Database, RadioTower } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
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

  return (
    <div className="flex flex-col">
      <SEO
        title="Investigation Agent Harness for Governed Enterprise AI"
        description="SafeMind Lab builds a production-oriented investigation agent harness with a Python control plane, Go data plane, durable state, scoped memory, policy gates, and SOC and AI Security domain packs."
      />

      {/* Hero Section */}
      <section className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white">
        <img
          src="/images/safemind_lab_hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[680px] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl pt-16 pb-20"
          >
            <div className="mb-6 px-4 py-1 bg-white/10 border border-white/15 text-blue-100 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full inline-block">
              Production-Oriented Investigation Harness
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02] mb-8 max-w-5xl">
              Governed agents for real investigations
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mb-8 leading-relaxed font-light">
              SafeMind Lab is building an investigation agent harness that separates LLM reasoning from authority, state, policy, memory, and tool execution. The implementation uses a Python control plane, Go data plane, protobuf contracts, durable workflow state, and domain packs for SOC triage and AI security.
            </p>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mb-12 leading-relaxed">
              Current maturity: strong scaffold with meaningful governed workflow execution, replay, evaluation, rollout controls, and 256 passing unit, integration, and contract tests; still not positioned as a production-complete enterprise platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/platform"
                className="bg-white text-slate-950 px-8 py-4 rounded-lg font-semibold shadow-xl flex items-center gap-2 hover:bg-slate-100 transition-all"
              >
                <span>View Harness Architecture</span>
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/projects/soc-agent"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/15 transition-all"
              >
                SOC Triage Case Study
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
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
                SafeMind Lab is anchored in the `/soc-triage-agent` implementation: a governed investigation harness with explicit service boundaries, durable state, policy gates, and domain-specific intelligence.
              </p>
            </motion.div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Shield size={22} />, title: 'Governed Control Plane', desc: 'Supervisor, reasoning boundary, policy engine, approvals, checkpoint recovery, replay export, and closure readiness.' },
                { icon: <Cpu size={22} />, title: 'Go Data Plane', desc: 'High-concurrency tool gateway with gRPC execution, governed write actions, adapter contracts, and action-ledger linkage.' },
                { icon: <Database size={22} />, title: 'State & Memory', desc: 'Durable investigations, plans, tasks, evidence, approvals, workflow events, scoped memory, quarantine, and retention controls.' },
                { icon: <RadioTower size={22} />, title: 'Domain Packs', desc: 'SOC and AI Security packs with deterministic classifiers, playbooks, response guidance, verdicts, and command-center telemetry.' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Research Questions</h2>
            <p className="mt-4 text-lg text-slate-500 font-light leading-relaxed">
              The implementation explores how much autonomy can be given to investigation agents while preserving deterministic contracts, reviewable evidence, and controlled production rollout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Authority', desc: 'Which decisions can be automated, which require approval, and which should remain deterministic service logic?' },
              { title: 'Evidence', desc: 'How do investigations remain grounded across long-running state, incomplete data, memory retrieval, and tool failures?' },
              { title: 'Rollout', desc: 'How should tenants move from shadow mode to copilot, gated execution, and bounded automation without losing control?' }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
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
                Safety is implemented as system behavior, not prompt style. The harness controls service identity, tenant scope, context construction, policy decisions, approval pauses, write execution, observability, replay, and rollout.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Tenant-scoped service identity and capability enforcement',
                'Policy-based action gating before data-plane execution',
                'Scoped memory with retrieval audit records and quarantine',
                'Action ledger, workflow events, spans, and replay bundles',
                'Trace scoring for safety, usefulness, latency, cost, and efficiency',
                'Release approval records, readiness gates, and rollback runbooks'
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
            SafeMind Lab treats enterprise AI as governed operational infrastructure: versioned contracts, measured traces, tenant-aware policy, and supervised autonomy across real investigation workflows.
          </p>
          <div className="flex flex-col items-center">
            <Link
              to="/blog"
              className="text-blue-600 hover:text-indigo-600 font-bold text-xs uppercase tracking-[0.2em] flex items-center transition-all group"
            >
              Read Design Notes
              <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
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
