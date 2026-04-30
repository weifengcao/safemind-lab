import { motion } from 'motion/react';
import { Shield, Brain, Layers, Cpu, Lock, Workflow, BarChart3, Database, GitBranch, Eye, ServerCog } from 'lucide-react';
import SEO from '../components/SEO';
import Mermaid from '../components/Mermaid';

export default function Platform() {
  const harnessChart = `
graph TB
    subgraph "Control Plane (Python)"
        A[API Gateway] --> B[Supervisor]
        B --> C[Reasoning Service]
        B --> D[Policy Engine]
        B --> E[Evaluation & Replay]
        B --> F[State Manager]
    end

    subgraph "State & Memory"
        G[(PostgreSQL Workflow State)]
        H[(Redis Hot State)]
        I[(Scoped Memory / Vector Context)]
    end

    subgraph "Data Plane (Go)"
        J[Tool Gateway] --> K[gRPC Execution]
        J --> L[SQS Worker]
        K --> M[Adapters / Connectors]
    end

    F <--> G
    B <--> H
    B <--> I
    B <== Protobuf / gRPC ==> J
    M --> N[SIEM / EDR / IAM / SaaS / Cloud]

    style B fill:#2563eb,stroke:#fff,stroke-width:2px,color:#fff
    style J fill:#0f172a,stroke:#fff,stroke-width:2px,color:#fff
  `;

  const sections = [
    {
      title: 'Reference Architecture',
      desc: 'The implementation is a domain-agnostic investigation harness. It isolates reasoning from authority, state, policy, context, and execution while keeping protobuf contracts as the shared boundary.',
      features: [
        { icon: <Layers size={20} />, title: 'Python Control Plane', text: 'API gateway, supervisor, reasoning boundary, policy engine, evaluation, replay, recovery, and MCP server support.' },
        { icon: <Workflow size={20} />, title: 'Go Data Plane', text: 'Governed tool gateway, gRPC execution, SQS worker path, adapter interfaces, and write-action ledger linkage.' },
        { icon: <Database size={20} />, title: 'State & Memory', text: 'Durable investigations, plans, tasks, evidence, approvals, checkpoints, scoped memory, and retention controls.' },
        { icon: <Eye size={20} />, title: 'Domain Packs', text: 'Portable deterministic intelligence for SOC triage and future governed workloads without baking domain logic into the core harness.' }
      ]
    },
    {
      title: 'Execution Model',
      desc: 'The harness treats LLM reasoning as proposal generation. Deterministic services decide whether a workflow can proceed, which tools are available, and how actions are recorded.',
      features: [
        { icon: <Shield size={20} />, title: 'Closure Readiness', text: 'Investigations cannot close with unresolved evidence gaps, contradictions, pending approvals, or failed write outcomes.' },
        { icon: <Brain size={20} />, title: 'Checkpoint Recovery', text: 'Workflow checkpoints, branch/merge semantics, resume endpoints, and recovery sweeps keep long-running work grounded.' },
        { icon: <Cpu size={20} />, title: 'Tool Isolation', text: 'External actions run through registered adapters with scoped credentials, tenant capability checks, and auditable outputs.' },
        { icon: <BarChart3 size={20} />, title: 'Evaluation & Replay', text: 'Replay bundles and trace scoring expose safety, usefulness, latency, cost, efficiency, and span-health gaps.' }
      ]
    },
    {
      title: 'Release & Tenant Governance',
      desc: 'The current implementation includes Piece 10 rollout controls for moving tenants through staged autonomy while preserving release review and rollback paths.',
      features: [
        { icon: <GitBranch size={20} />, title: 'Autonomy Modes', text: 'Tenant profiles support shadow, copilot, gated, and automated modes with policy context injected into investigations.' },
        { icon: <BarChart3 size={20} />, title: 'Readiness Gates', text: 'Release and metric evidence back cutover decisions before rollout advances.' },
        { icon: <Lock size={20} />, title: 'Release Approvals', text: 'Model, prompt, policy, tool, schema, domain, and rollout changes have approval records and change history.' },
        { icon: <Workflow size={20} />, title: 'Rollback Runbooks', text: 'Release, rollback, and cutover procedures are documented and represented in the governance model.' }
      ]
    },
    {
      title: 'SaaS–AaaS Adaptation',
      desc: 'A key research track is how traditional SaaS workflows can be incrementally upgraded with agentic components without replacing the entire system.',
      features: [
        { icon: <GitBranch size={20} />, title: 'Workflow Decomposition', text: 'Separate deterministic steps, judgment-heavy steps, human approval points, and tool-mediated actions.' },
        { icon: <BarChart3 size={20} />, title: 'Quantitative Tradeoffs', text: 'Measure where agents improve throughput or decision quality, and where SaaS-style deterministic logic remains better.' },
        { icon: <Workflow size={20} />, title: 'Incremental Adoption', text: 'Existing workflows can start with agent-assisted review, then gradually move toward bounded autonomous execution.' },
        { icon: <Cpu size={20} />, title: 'Versioned Proposals', text: 'Supervisor agents can propose architecture changes, but rollout happens through versioning and human-in-the-loop review.' }
      ]
    }
  ];

  const domainPacks = [
    {
      title: 'SOC Triage',
      text: 'Canonical alert ingest, alert-family classification, shared-key correlation, evidence tables, deterministic verdicting, and response-guidance task templates.',
    },
  ];

  return (
    <div className="pb-24">
      <SEO
        title="Harness & Control Plane"
        description="SafeMind Harness is a production-oriented investigation agent harness with a Python control plane, Go data plane, protobuf contracts, durable state, scoped memory, replay, evaluation, and rollout governance."
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
            A production-oriented harness for governed investigation workflows. The current implementation combines a Python control plane, Go execution data plane, durable state manager, scoped memory fabric, policy guardrails, replay, evaluation, and tenant rollout controls.
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Harness Architecture</h2>
            <p className="text-slate-500 font-light">Separating reasoning, state, policy, memory, and tool execution.</p>
          </div>
          <Mermaid chart={harnessChart} />
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div>
            <div className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
              Implemented Domain Pack
            </div>
            <h2 className="text-3xl font-bold mb-5 text-slate-900 tracking-tight">Portable Workload Intelligence</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Domain packs keep workload-specific logic outside the core harness while preserving deterministic behavior, typed bundle rules, and governed response execution.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {domainPacks.map((pack) => (
              <div key={pack.title} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-6">
                  <ServerCog size={20} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{pack.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{pack.text}</p>
              </div>
            ))}
          </div>
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
              The implementation is substantial but intentionally described as a scaffold, not a finished enterprise platform. The remaining work is mostly production hardening.
            </p>

            <div className="space-y-12">
              {[
                { title: 'Connector Maturity', desc: 'The governed execution boundary exists, but many adapters remain mock or local development surfaces.' },
                { title: 'Schema Parity', desc: 'Shared contracts are strong, while some Python, protobuf, and Go object parity still needs cleanup.' },
                { title: 'Replay Depth', desc: 'Replay reconstruction and scoring exist, but a true replay runner and failure-injection simulator remain future work.' },
                { title: 'Production Security', desc: 'Tenant enforcement is present for local deployments; production-grade mTLS, JWT, HA, DR, and threat-modeling work remains.' }
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
