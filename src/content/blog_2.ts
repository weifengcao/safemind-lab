import type { BlogPost } from './blog';

export const blog2: BlogPost = {
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

[[diagram:harness]]

At a high level, the system is structured into four layers:

- Domain Pack
- Control Plane
- Data Plane
- Memory + Observability

## The investigation loop

[[diagram:loop]]

This loop is the core execution primitive.

Unlike typical agent frameworks, it is:
- stateful
- bounded
- evaluated at every step

## Final thought

Agents are not prompts.

They are governed systems.
`
};
