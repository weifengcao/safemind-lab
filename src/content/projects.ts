export interface ProjectSummary {
  id: string;
  title: string;
  domain: string;
  desc: string;
  tags: string[];
  link: string;
  accent: 'blue' | 'indigo';
}

export const projectSummaries: ProjectSummary[] = [
  {
    id: 'soc-agent',
    title: 'SOC Triage Agent',
    domain: 'Cybersecurity',
    desc: 'A concrete investigation workload for validating alert normalization, evidence gathering, risk scoring, action gating, and structured triage verdicts.',
    tags: ['Cybersecurity', 'Harness Workload'],
    link: '/projects/soc-agent',
    accent: 'blue',
  },
  {
    id: 'fintech-compliance',
    title: 'Fintech Compliance Agent',
    domain: 'Financial Services',
    desc: 'A policy-heavy workload for testing auditability, evidence provenance, policy mapping, compliance reasoning, and human review boundaries.',
    tags: ['Compliance', 'Policy Engine'],
    link: '/projects/fintech-compliance',
    accent: 'indigo',
  },
];
