import { ShieldCheck, Play, ArrowLeft, Terminal, Workflow, FileSearch, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ProjectSOC() {
  return (
    <div className="pb-24">
      <SEO 
        title="SOC Triage Agent Case Study" 
        description="Autonomous alert investigation and triage for modern security operations centers. This project demonstrates the SafeMind Harness's ability to manage complex evidence-gathering workflows with high reliability."
      />
      <div className="max-w-4xl mx-auto px-4 mt-12 mb-8">
        <Link to="/projects" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
          <ArrowLeft size={14} className="mr-2" /> Back to Projects
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Cybersecurity Investigation
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 italic text-slate-900 leading-tight tracking-tight">SOC Triage Agent</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Autonomous alert investigation and triage for modern security operations centers. Demonstrating high reliability in complex evidence-gathering.
          </p>
        </header>

        <section className="mb-20">
          <div className="aspect-video bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-50" />
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" />
                </div>
                <span className="mt-6 font-bold text-slate-900 text-xs uppercase tracking-widest">WATCH PROJECT WALKTHROUGH</span>
             </div>
          </div>
        </section>

        <div className="space-y-24">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Problem Statement</h2>
            <div className="text-slate-500 font-light leading-relaxed space-y-6 text-lg">
              <p>
                SOC analysts are overwhelmed by the 'alert treadmill.' High volumes of low-fidelity signals bury critical threats. Existing SOAR automation is too brittle to handle the nuance of investigation.
              </p>
              <p>
                The SOC Triage Agent replaces strict SOAR playbooks with a flexible, goal-oriented agentic harness that understands the <i>meaning</i> of the data it finds.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">System Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Terminal size={24} />, title: "Normalization", text: "Ingests raw event logs and converts them into a canonical investigation schema." },
                { icon: <FileSearch size={24} />, title: "Evidence Gatherer", text: "Recursive tool use to fetch EDR logs, identity state, and network flow data." },
                { icon: <Workflow size={24} />, title: "Planner", text: "Determines the next investigative step based on current findings and risk." },
                { icon: <ShieldCheck size={24} />, title: "Verdict Engine", text: "Provides final disposition with structured reasoning and confidence scoring." }
              ].map((step, idx) => (
                <div key={idx} className="p-10 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                  <div className="text-blue-600 mb-6">{step.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
