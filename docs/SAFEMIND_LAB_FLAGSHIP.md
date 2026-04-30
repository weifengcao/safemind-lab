# SafeMind Lab Flagship Content Brief

This brief is the public-facing content baseline for SafeMind Lab. It should stay aligned with the current implementation in `/Users/weifengcao/Documents/soc-triage-agent` and should avoid unverifiable performance claims.

For copy-ready Substack drafts, use:

- `docs/substack/SafeMind_Lab_Substack_Blog_Series.md`

## Positioning

SafeMind Lab is an engineering initiative focused on governed enterprise AI workflows. The current implementation centers on an investigation agent harness: a domain-agnostic runtime that separates LLM reasoning from authority, policy, durable state, scoped memory, tool execution, evaluation, replay, and rollout governance.

The work should be described as a strong implementation scaffold, not a finished enterprise platform. The repository includes meaningful workflow state, SOC and AI Security domain packs, governed execution boundaries, replay and evaluation artifacts, and staged tenant rollout controls. Production hardening remains ongoing.

## Architecture Summary

The harness is organized around four boundaries:

1. Python control plane: API gateway, supervisor, reasoning-service boundary, policy engine, evaluation, replay, recovery coordination, and MCP-style interfaces.
2. Go data plane: governed tool gateway, gRPC execution, worker path, adapter interfaces, tenant-scoped capability checks, and action-ledger linkage.
3. State and memory: durable investigations, plans, tasks, evidence, policy decisions, approvals, control decisions, workflow events, checkpoints, scoped memory, retrieval audit records, retention controls, and quarantine behavior.
4. Domain packs: deterministic workload intelligence for SOC triage and AI Security without hard-coding domain behavior into the core harness.

## SOC Triage Summary

The SOC domain pack provides canonical alert ingest, alert-family classification, playbook selection, shared-key correlation, analyst-facing evidence tables, deterministic verdicting, and family-aware response guidance.

The intended output is not a free-form chatbot answer. It is reviewable investigation state: what happened, what evidence supports it, what remains uncertain, what response is recommended, what policy decisions were made, and which approvals are pending.

## AI Security Summary

The AI Security domain pack extends the same harness pattern to enterprise AI execution telemetry. It includes hybrid risk detection, forensic playbooks for model-abuse and prompt-injection scenarios, containment-oriented response patterns, and command-center monitoring concepts.

## Content Rules

- Do not claim production completeness.
- Do not claim measured MTTR, accuracy, or cost improvements unless a real evaluation report exists.
- Use "implementation", "scaffold", "runtime", "harness", and "domain pack" language.
- Use "governed", "bounded", "reviewable", and "deterministic" for the safety model.
- Distinguish recommendations from permissions. The system may recommend response actions, but governed execution still requires policy and rollout checks.

## Recommended Visuals

- Use `public/images/safemind_lab_hero.png` for architecture and harness positioning.
- Use `public/images/dashboard_mockup.png` for SOC triage and command-console content.

## Recommended Blog Sequence

1. Beyond the Chatbot: The Governance Crisis in Enterprise AI
2. Designing a Governed Investigation Harness
3. Inside the SOC Triage Agent Domain Pack
4. Measurable Autonomy Without Fake Metrics
5. Context Engineering vs. Harness Engineering
6. What Breaks First in Agentic Systems
7. Policy and Auditability in AI Workflows
