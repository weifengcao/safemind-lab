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
    id: 'fintech-compliance',
    title: 'Fintech Compliance Agent',
    domain: 'Financial Services',
    desc: 'A policy-heavy workload for validating auditability, evidence provenance, policy mapping, compliance reasoning, and human review boundaries.',
    tags: ['Compliance', 'Policy Engine'],
    link: '/projects/fintech-compliance',
    accent: 'indigo',
  },
];
