import type { BlogPost } from './blog';

export const blog2: BlogPost = {
  slug: 'designing-a-governed-agent-harness',
  title: 'Designing a Governed Agent Harness for Enterprise AI',
  excerpt: 'How to move from prompt-based agents to production-grade systems with control planes, state, policy, and evaluation.',
  date: '2026-04-29',
  readTime: '14 min read',
  category: 'Architecture',
  content: `# Designing a Governed Agent Harness for Enterprise AI

In the previous post, we established that enterprise AI is fundamentally a systems problem.

This post answers the next question:

**What does that system actually look like?**

## The architecture

[[diagram:harness]]

At a high level, the system is structured into four layers:

- Domain Pack (business logic)
- Control Plane (reasoning + decision)
- Data Plane (execution)
- Memory + Observability (context + traceability)

### Why this separation matters

Most agent systems collapse these layers into one.

That leads to:
- unbounded execution
- unsafe actions
- no auditability

This architecture enforces separation of concerns:

- Control plane decides
- Data plane executes
- Memory provides context

This is the same principle used in distributed systems and cloud infrastructure.

## Control plane: the real system

The control plane is the most important part.

It contains:

- Planner → defines what to do
- Memory Router → defines what to know
- Reasoner → defines what it means
- Evaluator → defines whether it is enough
- Policy Engine → defines what is allowed

This turns AI from a stateless function into a governed system.

## The investigation loop

[[diagram:loop]]

This loop is the core execution primitive.

Unlike typical agent frameworks, it is:

- stateful (tracks progress)
- bounded (controlled by budgets)
- evaluated (decision at every step)

### Step-by-step

1. Planner creates a DAG of investigation steps
2. Workers collect evidence in parallel
3. Synthesizer normalizes data into facts
4. Reasoner generates hypotheses
5. Evaluator decides whether to stop or continue

If insufficient:
- replan
- collect targeted evidence

If sufficient:
- produce decision
- pass through policy

### Why this matters

Without this loop, systems either:

- stop too early (low confidence)
- run too long (high cost)

This loop balances correctness and efficiency.

## Policy as a first-class system

Policy is not a prompt.

It is a deterministic layer that:

- gates actions
- enforces approvals
- prevents unsafe execution

This is critical in enterprise environments.

## Final thought

This architecture is not about making agents smarter.

It is about making them reliable.

Agents are not prompts.

They are governed systems.
`
};
