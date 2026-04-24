export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'context-engineering-vs-harness-engineering',
    title: 'Context Engineering vs. Harness Engineering',
    excerpt: 'Why building a better harness is more impactful than endlessly tweaking prompt context windows.',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Architecture',
    content: `
# Context Engineering vs. Harness Engineering

The current obsession with "prompt engineering" and "context window optimization" misses the fundamental tectonic shift required for production AI: **Harness Engineering**.

In the early days of agent development, we focused on how to *stuff* more into the prompt. How to give the agent more instructions, more few-shot examples, and more retrieved snippets. This stage, while productive, has hit a point of diminishing returns.

## What is Harness Engineering?

Harness Engineering is the discipline of building the infrastructure *around* the model. It is the realization that the model is just a non-deterministic CPU, and like any CPU, it needs an operating system to manage memory, I/O, and safety.

### The Three Pillars of a Hardened Harness:

1. **State Formalization:** Moving away from a monolithic "history" string and toward a structured state object that persists across runs.
2. **Deterministic Gating:** Using the model to propose actions, but using code to validate and execute them.
3. **Execution Isolation:** Ensuring that if an agent triggers a tool that fails or hangs, the entire system doesn't crash.

## Why it Matters

When teams evaluate agents for high-stakes environments like a Security Operations Center (SOC), they cannot afford "stochastic hallucinations." Any high-impact action must be defensible. A good harness provides the **provenance** needed to trust the agent's verdict.

If you want to build a better agent, stop tweaking your prompts. Start building a better harness.
`,
  },
  {
    slug: 'what-breaks-first-in-agentic-systems',
    title: 'What Breaks First in Agentic Systems',
    excerpt: 'Lessons learned from testing agentic workflows against realistic security operations constraints.',
    date: '2024-02-28',
    readTime: '12 min read',
    category: 'Production',
    content: `
# What Breaks First in Agentic Systems

After testing agentic workloads against realistic security operations constraints, a recurring pattern of failure emerges. It isn't usually the model "getting it wrong"--it's the system failing around the model.

## 1. Tool-Call Ambiguity
Models are remarkably good at calling tools, but they are equally good at hallucinating tool signatures when they feel "constrained." Without strict schema enforcement at the harness level, these hallucinations lead to silent failures.

## 2. Context Poisoning
As soon as an agent ingests external data (like an EDR log or a web page), it is exposed to potential injection. If the harness doesn't treat external data as untrusted, the agent's reasoning loop can be hijacked.

## 3. Latency Cascades
Sequential reasoning loops (Think -> Act -> Observe -> Repeat) stack latency. In high-volume triage, a 5-step investigation taking 60 seconds is often too slow. Parallelization within the harness is essential for production parity.

## Conclusion

Building systems that thrive under these conditions requires a move toward **explicit orchestration**. We must design for failure rather than assuming the agent will "figure it out."
`,
  },
  {
    slug: 'policy-and-auditability-in-ai-workflows',
    title: 'Policy and Auditability in AI Workflows',
    excerpt: 'How to design agent systems that can be trusted by compliance and legal teams.',
    date: '2024-02-10',
    readTime: '10 min read',
    category: 'Governance',
    content: `
# Policy and Auditability in AI Workflows

The greatest barrier to AI adoption in highly regulated industries (Fintech, Healthcare, Defense) isn't model quality--it's **trust**. Specifically, the ability to audit *why* a decision was made.

## Designing for Auditability

In the SafeMind Harness, we treat every decision as a node in a graph. Each node contains:
- The input context
- The specific policy being evaluated
- The model's reasoning
- The confidence score

## The Role of Policy-as-Code

By translating legal or operational policies into structured checks (Policy-as-Code), we give the agent a "rulebook" it cannot ignore. Instead of asking the model to "be compliant," we force it to check its proposed actions against a deterministic validator.

This hybrid approach--LLM for reasoning, Code for enforcement--is the only way to satisfy the requirements of a modern compliance department.
`,
  },
];

export function getBlogPost(slug: string | undefined) {
  return blogPosts.find((post) => post.slug === slug);
}
