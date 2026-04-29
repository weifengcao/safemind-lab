export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'designing-a-governed-agent-harness',
    title: 'Designing a Governed Agent Harness for Enterprise AI',
    excerpt: 'How to move from prompt-based agents to production-grade systems with control planes, state, policy, and evaluation.',
    date: '2026-04-29',
    readTime: '12 min read',
    category: 'Architecture',
    content: `# Designing a Governed Agent Harness for Enterprise AI

In the previous post, we established that enterprise AI is fundamentally a systems problem.

This post answers the next question:

**What does that system actually look like?**

## The architecture

![Harness Architecture](/diagrams/safemind-agent-harness-architecture.svg)

At a high level, the system is structured into four layers:

- Domain Pack (business logic)
- Control Plane (reasoning and decision)
- Data Plane (execution)
- Memory + Observability (context and traceability)

### Domain Pack

The domain pack defines the problem space: schemas, prompts, tools, and workflows.

In this case, a SOC triage agent.

### Control Plane

This is the core of the system.

It orchestrates execution, manages state, evaluates decisions, and enforces policy.

Key components:

- Planner: generates bounded investigation plans
- Memory Router: retrieves relevant context
- Reasoner: synthesizes evidence
- Evaluator: decides whether to stop or continue
- Policy Engine: enforces safety and approvals

### Data Plane

The data plane executes tool calls.

It is intentionally stateless and isolated from reasoning.

### Memory Fabric

Multiple memory systems support the loop:

- hot state
- metadata retrieval
- semantic patterns
- knowledge base
- feedback

## The investigation loop

![Investigation Loop](/diagrams/safemind-investigation-loop.svg)

The system operates as a bounded reasoning loop:

1. plan
2. collect evidence
3. synthesize
4. reason
5. evaluate

Then either:

- continue
- replan
- terminate

This loop is the core abstraction.

## Why this works

This architecture solves the key problems identified earlier:

- state enables continuity
- evaluation enables correctness
- policy enables safety
- separation enables reliability

Most importantly, it turns an agent from a prompt into a controlled system.

## Final thought

If Blog 1 defined the problem, this is the starting point of the solution.

In the next post, we will walk through a concrete SOC agent implementation using this architecture.
`
  },
  {
    slug: 'enterprise-ai-is-a-systems-problem',
    title: 'Enterprise AI Is Not a Model Problem — It’s a Systems Problem',
    excerpt: 'Why production AI agents need orchestration, state, policy, evaluation, memory, and feedback loops — not just better prompts or larger models.',
    date: '2026-04-29',
    readTime: '11 min read',
    category: 'Enterprise AI',
    content: `...existing...`
  }
];

export function getBlogPost(slug?: string) {
  if (!slug) return undefined;
  return BLOG_POSTS.find((post) => post.slug === slug);
}
