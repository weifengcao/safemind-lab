export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-safemind-philosophy-governed-autonomy-not-raw-autonomy',
    title: 'The SafeMind Philosophy: Governed Autonomy, Not Raw Autonomy',
    excerpt: 'Why enterprise agents need structured authority boundaries, review paths, and policy-controlled autonomy instead of unrestricted action.',
    date: '2026-04-30',
    readTime: '8 min read',
    category: 'Governance',
    url: 'https://wei16.substack.com/p/the-safemind-philosophy-governed',
  },
  {
    slug: 'enterprise-ai-is-a-systems-problem',
    title: 'Enterprise AI Is a Systems Problem',
    excerpt: 'A systems framing for production enterprise AI: orchestration, state, memory, policy, evaluation, and feedback matter as much as the model.',
    date: '2026-04-30',
    readTime: '11 min read',
    category: 'Enterprise AI',
    url: 'https://wei16.substack.com/p/enterprise-ai-is-a-systems-problem',
  },
  {
    slug: 'design-principles-for-governed-agent-infrastructure',
    title: 'Design Principles for Governed Agent Infrastructure',
    excerpt: 'Core design principles for building agent infrastructure that can be reviewed, constrained, measured, and evolved safely.',
    date: '2026-04-30',
    readTime: '10 min read',
    category: 'Architecture',
    url: 'https://wei16.substack.com/p/design-principles-for-governed-agent?r=2a4c2g',
  },
  {
    slug: 'designing-the-investigation-agent-harness',
    title: 'Designing the Investigation Agent Harness',
    excerpt: 'How a governed investigation harness separates reasoning from state, policy, memory, evaluation, and tool execution.',
    date: '2026-04-30',
    readTime: '12 min read',
    category: 'Architecture',
    url: 'https://wei16.substack.com/p/designing-the-investigation-agent?r=2a4c2g',
  },
  {
    slug: 'building-the-soc-triage-agent-as-a-domain-pack',
    title: 'Building the SOC Triage Agent as a Domain Pack',
    excerpt: 'How canonical alerts, deterministic playbooks, evidence tables, correlation, verdicting, and response guidance fit into the harness.',
    date: '2026-04-30',
    readTime: '10 min read',
    category: 'SOC',
    url: 'https://wei16.substack.com/p/building-the-soc-triage-agent-as',
  },
  {
    slug: 'from-recommendation-to-permission',
    title: 'From Recommendation to Permission: Policy, Approval, and Action Gating',
    excerpt: 'Why response guidance is not execution permission, and how policy gates and approvals preserve operational authority.',
    date: '2026-04-30',
    readTime: '9 min read',
    category: 'Policy',
    url: 'https://wei16.substack.com/p/from-recommendation-to-permission',
  },
  {
    slug: 'deployment-architecture-for-governed-agents',
    title: 'Deployment Architecture for Governed Agents',
    excerpt: 'Deployment patterns for governed agent systems across control planes, execution planes, state, rollout modes, and tenant boundaries.',
    date: '2026-04-30',
    readTime: '10 min read',
    category: 'Deployment',
    url: 'https://wei16.substack.com/p/deployment-architecture-for-governed',
  },
  {
    slug: 'observability-replay-and-evaluation-in-production',
    title: 'Observability, Replay, and Evaluation in Production',
    excerpt: 'How traces, replay bundles, scoring, and review loops make agentic workflows inspectable after execution.',
    date: '2026-04-30',
    readTime: '9 min read',
    category: 'Evaluation',
    url: 'https://wei16.substack.com/p/observability-replay-and-evaluation',
  },
  {
    slug: 'sre-for-agentic-systems',
    title: 'SRE for Agentic Systems',
    excerpt: 'Reliability practices for long-running agentic systems: recovery, drift, escalation, health checks, and operational playbooks.',
    date: '2026-04-30',
    readTime: '9 min read',
    category: 'Operations',
    url: 'https://wei16.substack.com/p/sre-for-agentic-systems',
  },
  {
    slug: 'the-road-ahead-managed-agent-lifecycles',
    title: 'The Road Ahead: Managed Agent Lifecycles',
    excerpt: 'A lifecycle view of enterprise agents: design, build, validate, deploy, observe, evaluate, govern, roll back, and retire.',
    date: '2026-04-30',
    readTime: '8 min read',
    category: 'Lifecycle',
    url: 'https://wei16.substack.com/p/the-road-ahead-managed-agent-lifecycles',
  },
];
