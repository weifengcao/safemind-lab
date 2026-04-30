import { ArrowLeft, Landmark, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ProjectFintech() {
  return (
    <div className="pb-24">
      <SEO 
        title="Fintech Compliance Agent Case Study" 
        description="Applying the SafeMind Harness to the rigors of financial regulation. This project demonstrates how the structured investigation state adapts to policy-heavy audit workloads."
      />
      <div className="max-w-4xl mx-auto px-4 mt-12 mb-8">
        <Link to="/projects" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
          <ArrowLeft size={14} className="mr-2" /> Back to Projects
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Fintech Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">Fintech Compliance Agent</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Applying the SafeMind Harness to the rigors of financial regulation. Adapting structured investigation state to policy-heavy audit workloads.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-10 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <Landmark className="text-blue-600 mb-6" size={32} />
                <h3 className="text-lg font-bold mb-3 text-slate-900 uppercase">Regulatory Audits</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">Structured mapping of transaction logs to specific AML and KYC policies.</p>
            </div>
            <div className="p-10 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <FileText className="text-indigo-600 mb-6" size={32} />
                <h3 className="text-lg font-bold mb-3 text-slate-900 uppercase">Policy Engine</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">Translates complex legal text into executable 'checks' that the agent must validate.</p>
            </div>
        </div>

        <section className="p-12 rounded-3xl bg-slate-900 text-white shadow-2xl">
           <h2 className="text-2xl font-bold mb-6 tracking-tight">Auditability as a Core Feature</h2>
           <p className="text-slate-300 mb-10 font-light leading-relaxed">
              In high-stakes finance, 'it just works' is not enough. You need to prove <i>why</i> it worked.
           </p>
           <ul className="space-y-4 text-slate-200 text-sm font-light">
              <li className="flex items-center"><ChevronRight size={14} className="text-blue-500 mr-2" /> Full tool-call history serialization</li>
              <li className="flex items-center"><ChevronRight size={14} className="text-blue-500 mr-2" /> Policy mapping per investigative step</li>
              <li className="flex items-center"><ChevronRight size={14} className="text-blue-500 mr-2" /> Structured risk reporting and provenance</li>
           </ul>
        </section>
      </article>
    </div>
  );
}
