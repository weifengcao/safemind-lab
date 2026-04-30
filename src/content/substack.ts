export type SubstackEssay = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
};

export const SUBSTACK_ESSAYS: SubstackEssay[] = [
  {
    title: 'Enterprise AI Is Not a Model Problem — It’s a Systems Problem',
    excerpt: 'A systems framing for production enterprise AI: why prompts and models are not enough without orchestration, state, memory, policy, evaluation, and feedback.',
    date: '2026-04-29',
    readTime: '11 min read',
    category: 'Enterprise AI',
    url: 'https://wei16.substack.com/p/enterprise-ai-is-not-a-model-problem',
  },
  {
    title: 'Designing a Governed Agent Harness for Enterprise AI',
    excerpt: 'A reference architecture for governed agent systems: control plane, data plane, memory router, RAG, policy engine, and evaluation loop.',
    date: '2026-04-29',
    readTime: '15 min read',
    category: 'Architecture',
    url: 'https://wei16.substack.com/p/designing-a-governed-agent-harness',
  },
];
