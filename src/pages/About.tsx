import { Github, Mail, Cpu, Workflow, Shield, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pb-24">
      <SEO
        title="About the Initiative"
        description="SafeMind Lab is a research and engineering initiative by a software engineer focused on governed enterprise AI systems, agent harnesses, and safe workflow innovation."
      />
      <section className="pt-24 pb-20 border-b border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Research-minded engineering</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            SafeMind Lab is an engineering initiative for building and validating governed enterprise AI systems. The focus is practical: improve enterprise workflows with agents where they help, keep deterministic software where it is stronger, and make the full system measurable and safe.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-2 space-y-8 text-lg text-slate-500 leading-relaxed font-light">
            <p>
              SafeMind Lab approaches enterprise AI as a software engineering problem with research questions attached. LLMs are useful reasoning engines, but they need runtime infrastructure around them: identity, policy, state, context, evaluation, observability, and human review.
            </p>
            <p>
              SafeMind Lab focuses on the hard middle layer between a demo and a trusted workflow. That means building harnesses, testing them against real investigation workloads, and learning where agentic behavior should be introduced or constrained.
            </p>
            <p>
              The current work centers on <strong>SafeMind Harness</strong>, a modular control plane for governed agent execution, and field workloads such as SOC triage and compliance review. These projects are not meant to be final products yet; they are concrete systems for validating architecture, safety, and workflow design.
            </p>
          </div>

          <div className="md:col-span-1 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Core Interests</h3>
              <ul className="space-y-6 text-sm text-slate-500 font-light">
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded bg-white shadow-sm flex items-center justify-center text-blue-600"><Cpu size={14} /></div> Agent Harnesses</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded bg-white shadow-sm flex items-center justify-center text-blue-600"><Workflow size={14} /></div> Enterprise Workflows</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded bg-white shadow-sm flex items-center justify-center text-blue-600"><BarChart3 size={14} /></div> Evaluation Loops</li>
                <li className="flex items-center gap-3"><div className="w-6 h-6 rounded bg-white shadow-sm flex items-center justify-center text-blue-600"><Shield size={14} /></div> Security & Safety</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-start gap-4 p-4">
              <a href="https://github.com/safemind-lab" className="p-3 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-blue-600 transition-colors shadow-sm"><Github size={18} /></a>
              <a href="mailto:contact@safemindlab.com" className="p-3 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-blue-600 transition-colors shadow-sm"><Mail size={18} /></a>
            </div>
          </div>
        </div>

        <section className="p-12 rounded-3xl bg-slate-900 text-white shadow-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Building from systems, not slogans.</h2>
          <p className="text-slate-300 mb-10 font-light leading-relaxed max-w-lg mx-auto">
            SafeMind Lab is open to discussions with teams working on enterprise AI architecture, agent runtime infrastructure, product security, and workflow automation.
          </p>
          <a href="/contact" className="inline-flex px-10 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all">
            Let's Talk
          </a>
        </section>
      </section>
    </div>
  );
}
