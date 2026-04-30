import { ShieldCheck, ArrowLeft, Terminal, Workflow, FileSearch, Network, ClipboardCheck, PauseCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Mermaid from '../components/Mermaid';

export default function ProjectSOC() {
  const socLifecycleChart = `
sequenceDiagram
    participant V as Vendor (CrowdStrike/SentinelOne)
    participant I as Ingest API (Canonical Alert)
    participant C as Classifier (Alert Family)
    participant P as Playbook (Deterministic Plan)
    participant H as Harness (Execution)
    participant G as Gateway (Governed Tools)
    participant A as Analyst (Review)

    V->>I: Raw Webhook
    I->>C: Canonical Alert Object
    C->>P: Bundle Rule Match
    P->>H: Seed Investigation + Response Guidance
    H->>G: Execute Allowed Reads/Writes
    G->>H: Evidence + Action Ledger Links
    H->>A: Verdict, Evidence Table, Approval Pause
  `;

  return (
    <div className="pb-24">
      <SEO 
        title="SOC Triage Agent Case Study" 
        description="SOC Triage Agent is the implemented cybersecurity domain pack for SafeMind Harness, covering canonical alert ingest, family classification, correlation, evidence gathering, deterministic verdicting, response guidance, and governed actions."
      />
      <div className="max-w-4xl mx-auto px-4 mt-12 mb-8">
        <Link to="/projects" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
          <ArrowLeft size={14} className="mr-2" /> Back to Projects
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Implemented Cybersecurity Domain Pack
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 italic text-slate-900 leading-tight tracking-tight">SOC Triage Agent</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            A concrete SOC workload implemented on the investigation harness: canonical alert ingest, deterministic family classification, playbook selection, shared-key correlation, evidence consolidation, response guidance, approval pauses, and review-ready verdicts.
          </p>
        </header>

        <section className="mb-20">
          <div className="aspect-video bg-slate-950 rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <img
              src="/images/dashboard_mockup.png"
              alt="SOC command console mockup"
              className="h-full w-full object-cover"
            />
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
                The SOC Triage Agent tests a stricter model: deterministic domain logic prepares the investigation, the harness executes only through governed tool boundaries, and analysts receive evidence-backed verdicts instead of free-form agent conclusions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Investigation Lifecycle</h2>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm mb-12">
               <Mermaid chart={socLifecycleChart} />
            </div>
            
            <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">System Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Terminal size={24} />, title: "Canonical Alert Ingest", text: "Persists alerts as first-class artifacts and attaches them to investigations, cases, replay bundles, and domain-pack pre-triage." },
                { icon: <Network size={24} />, title: "Family Classification", text: "Typed configurable bundle rules classify phishing, OAuth abuse, cloud IAM, privileged access, and new family identifiers without code changes." },
                { icon: <FileSearch size={24} />, title: "Correlation & Evidence", text: "Shared-key correlation ranks related investigations and produces analyst-facing evidence tables, briefs, and persisted recommendations." },
                { icon: <Workflow size={24} />, title: "Response Guidance", text: "Family-aware recommendations become deterministic task templates constrained by tenant tool availability and policy gates." },
                { icon: <PauseCircle size={24} />, title: "Governed Response", text: "Write actions trigger approval pauses or human-review escalation when automation fails or rollout mode blocks execution." },
                { icon: <ShieldCheck size={24} />, title: "Deterministic Verdicting", text: "The verdict engine emits structured disposition, rationale, confidence, and next steps from persisted evidence rather than raw model output." }
              ].map((step, idx) => (
                <div key={idx} className="p-10 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                  <div className="text-blue-600 mb-6">{step.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{step.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Implemented Scenario Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Phishing response with mailbox, identity, and endpoint evidence',
                'OAuth abuse investigation with suspicious app and token-risk context',
                'Cloud IAM alert triage with principal and supporting-entity overlap',
                'Privileged access workflow with governed containment recommendations'
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <ClipboardCheck size={20} className="mt-1 text-blue-600 flex-shrink-0" />
                  <p className="text-slate-600 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
