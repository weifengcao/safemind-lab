import type { BlogPost } from './blog';

export const blog1: BlogPost = {
  slug: 'enterprise-ai-is-a-systems-problem',
  title: 'Enterprise AI Is Not a Model Problem — It’s a Systems Problem',
  excerpt: 'Why production AI agents require orchestration, state, policy, evaluation, memory, and feedback loops — not just better prompts or larger models.',
  date: '2026-04-29',
  readTime: '11 min read',
  category: 'Enterprise AI',
  content: `# Enterprise AI Is Not a Model Problem — It’s a Systems Problem

There is a predictable pattern in how teams adopt LLMs.

First, the demo works.

Then the system is exposed to real-world conditions.

Behavior becomes inconsistent. Costs rise. Outputs become harder to explain.

> LLMs do not fail in isolation. Systems do.

## The illusion of model-centric design

Most systems start with models and prompts.

But production systems must handle:

- noisy inputs
- multi-step reasoning
- system failures
- strict constraints

These are systems problems.

## SOC triage as an example

Alerts arrive from multiple systems, often duplicated and incomplete.

A simple pipeline fails because it lacks structure.

## The transition

> from calling a model
> to executing a process

## Deterministic preprocessing

Normalize, deduplicate, and structure data before using AI.

## Stateful execution

Track evidence, progress, and uncertainty across steps.

## Reasoning vs decision

Models propose. Systems decide.

## Bounded execution

Limit time, cost, and steps.

## Policy enforcement

Externalize safety and approval logic.

## Memory system

Combine operational, semantic, and knowledge memory.

## Evaluation

Continuously measure and improve.

## Final thought

Enterprise AI is constrained by architecture.

> Agents are systems.
`
};