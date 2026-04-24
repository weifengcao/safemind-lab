import { motion } from 'motion/react';
import { Shield, Brain, Layers, Cpu, Lock, Workflow, BarChart3, Database, GitBranch, Eye } from 'lucide-react';
import SEO from '../components/SEO';

export default function Platform() {
  const sections = [
    {
      title: 'Reference Architecture',
      desc: 'The SafeMind Harness is a reference control plane for governed enterprise AI systems. It isolates reasoning from authority, state, policy, context, and tool execution.',
      features: [
        { icon: <Layers size={20} />, title: 'Control Plane', text: 'Planning, policy checks, risk classification, evaluation signals, and human review orchestration.' },
        { icon: <Workflow size={20} />, title: 'Data Plane', text: 'Ingestion, normalization, tool execution, sandboxing, retries, and external system adapters.' },
        { icon: <Database size={20} />, title: 'Domain Packs', text: 'Portable workload logic for domains such as SOC investigation, compliance review, and future enterprise workflows.' },
        { icon: <Eye size={20} />, title: 'Observability', text: 'Structured traces, evidence provenance, run history, and decision records for review and debugging.' }
      ]
    },
    {
      title: 'Execution Model',
      desc: 'The harness treats LLM reasoning as proposal generation. Authority remains in deterministic services that validate, gate, execute, and record actions.',
      features: [
        { icon: <Shield size={20} />, title: 'Action Gating', text: 'Every high-risk tool call is checked against policy, permissions, risk level, and required approval mode.' },
        { icon: <Brain size={20} />, title: 'State Manager', text: 'Durable investigation state keeps long-running workflows grounded across steps, retries, and human handoffs.' },
        { icon: <Cpu size={20} />, title: 'Tool Isolation', text: 'External actions are executed through bounded adapters with scoped credentials and auditable outputs.' },
        { icon: <BarChart3 size={20} />, title: 'Evaluation Loop', text: 'Run quality is measured through correctness, evidence sufficiency, safety, latency, cost, and review outcomes.' }
      ]
    },
    {
      title: 'SaaS–AaaS Adaptation',
      desc: 'A key research track is how traditional SaaS workflows can be incrementally upgraded with agentic components without replacing the entire system.',
      features: [
        { icon: <GitBranch size={20} />, title: 'Workflow Decomposition', text: 'Separate deterministic steps, judgment-heavy steps, human approval points, and tool-mediated actions.' },
        { icon: <BarChart3 size={20} />, title: 'Quantitative Tradeoffs', text: 'Measure where agents improve throughput or decision quality, and where SaaS-style deterministic logic remains better.' },
        { icon: <Lock size={20} />, title: 'Versioned Proposals', text: 'Supervisor agents can propose architecture changes, but rollout happens through versioning and human-in-the-loop review.' },
        { icon: <Workflow size={20} />, title: 'Incremental Adoption', text: 'Existing workflows can start with agent-assisted review, then gradually move toward bounded autonomous execution.' }
      ]
    }
  ];

  return (
    <div className="pb-24">
      <SEO
        title="Harness & Control Plane"
        description="SafeMind Harness is a reference control plane for governed enterprise AI systems, combining policy, state, evaluation, observability, and safe execution."
      />

      <section className="pt-24 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Reference Control Plane
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight"
          >
            SafeMind Harness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed font-light"
          >
            A production-oriented harness for building, evaluating, and governing agent-driven enterprise workflows. It is the concrete engineering artifact behind the SafeMind research direction.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-32">
        {sections.map((section, idx) => (
          <section key={idx}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight">{section.title}</h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed">{section.desc}</p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.features.map((item, fIdx) => (
                  <div key={fIdx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 rounded-3xl bg-slate-900 text-white p-8 md:p-16 shadow-2xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Production Constraints</h2>
            <p className="text-lg text-slate-300 mb-12 font-light leading-relaxed">
              Real enterprise workflows fail in places simple demos avoid: ambiguous context, unreliable tools, authorization boundaries, review requirements, and evidence gaps.
            </p>

            <div className="space-y-12">
              {[
                { title: 'Context Boundaries', desc: 'The system must retrieve what is relevant and permitted, then compress long-running state without losing evidence.' },
                { title: 'Tool Reliability', desc: 'APIs fail and data is incomplete. The harness manages retries, fallbacks, scoped execution, and escalation paths.' },
                { title: 'Auditability', desc: 'Every action, observation, and final verdict is traceable so engineers and reviewers can reconstruct what happened.' },
                { title: 'Safe Adaptation', desc: 'Architecture changes are proposed, evaluated, versioned, and reviewed before they affect production behavior.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-slate-300 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center py-12">
          <h2 className="text-xs font-bold mb-8 text-slate-900 uppercase tracking-widest">Validate it against real workloads</h2>
          <div className="flex justify-center gap-4">
            <a href="/projects" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
              View Field Workloads
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
