export interface ProjectSummary {
  id: string;
  title: string;
  domain: string;
  desc: string;
  tags: string[];
  link: string;
  accent: 'blue' | 'indigo' | 'emerald';
}

export const projectSummaries: ProjectSummary[] = [
  {
    id: 'soc-agent',
    title: 'SOC Triage Agent',
    domain: 'Cybersecurity',
    desc: 'A first-class SOC domain pack for canonical alert ingest, deterministic family classification, playbook seeding, evidence tables, response guidance, and review-ready verdicts.',
    tags: ['SOC', 'Domain Pack'],
    link: '/projects/soc-agent',
    accent: 'blue',
  },
  {
    id: 'ai-security',
    title: 'AI Security Domain Pack',
    domain: 'AI Governance',
    desc: 'Closed-loop governance for enterprise AI execution telemetry, including model-abuse detection, forensic playbooks, active containment, and command-center monitoring.',
    tags: ['AI Security', 'Command Center'],
    link: '/platform#ai-security',
    accent: 'emerald',
  },
  {
    id: 'fintech-compliance',
    title: 'Fintech Compliance Agent',
    domain: 'Financial Services',
    desc: 'A policy-heavy workload for validating auditability, evidence provenance, policy mapping, compliance reasoning, and human review boundaries.',
    tags: ['Compliance', 'Policy Engine'],
    link: '/projects/fintech-compliance',
    accent: 'indigo',
  },
];
