# Understanding Agent Skills: Foundation, Architecture, and Philosophy

**Category**: Architecture | **Read Time**: 12 min | **Date**: 2026-05-08

## The Problem with Pure Prompts

When Anthropic introduced Agent Skills for Claude, it addressed a practical design challenge: **how do you give Claude procedural knowledge, scripts, and resources without bloating the system prompt?**

Traditional approaches looked like this:

```
You are an insurance claims agent. You need to know:
- Claims processing rules (500 lines)
- Policy types and coverage details (300 lines)
- Fraud detection patterns (200 lines)
- Customer service guidelines (150 lines)
- Technical API documentation (400 lines)
- Escalation procedures (100 lines)
- ... and more
```

This approach creates several problems:

1. **Prompt bloat**: Your system prompt becomes thousands of lines. The agent's reasoning becomes buried under reference material.
2. **Reusability nightmare**: If another agent needs "fraud detection patterns," you either copy-paste (maintenance disaster) or struggle to share.
3. **Discoverability**: New team members don't know what knowledge exists or where it lives.
4. **Governance gaps**: You can't track who wrote which domain rules, when they changed, or why.
5. **Composition friction**: Building agents from specialized knowledge pieces becomes manual and error-prone.

## What Are Skills?

A **Skill** is Anthropic's folder-based package for teaching Claude how to perform a specific task. A Skill contains a required `SKILL.md` file and can also include scripts, reference files, templates, and other resources that Claude loads only when relevant.

Think of it this way:

- **Prompt**: "Here's what you are. Here's how you think."
- **Context**: "Here's relevant information for this specific task."
- **Skill**: "Here's a reusable capability folder Claude can discover and load when this task needs it."

### Anatomy of a Skill

A Claude Skill typically includes:

1. **A directory**: The Skill is a folder, not just a prompt snippet.
2. **`SKILL.md`**: The top-level file Claude reads when the Skill is relevant.
3. **YAML frontmatter**: Required `name` and `description` fields. Claude uses this metadata to decide when to load the Skill.
4. **Instructions**: The core procedure, constraints, and usage guidance.
5. **Optional resources**: Additional markdown files, templates, scripts, images, or examples.
6. **Optional executable code**: Scripts Claude can run through its available execution environment when deterministic code is better than token generation.

```markdown
---
name: detecting-claims-fraud
description: Identifies fraud indicators in insurance claims and recommends investigation escalation. Use when reviewing a claim for fraud risk, suspicious documentation, staged accidents, inflated amounts, or customer claim history.
---

# Detecting Claims Fraud

## Purpose
Enable agents to identify high-risk fraudulent claims patterns and recommend investigation escalation.

## Scope
This skill covers:
- Common fraud indicators (staged accidents, inflated claims, documentation inconsistencies)
- Red flags based on historical patterns
- Risk scoring methodology
Does NOT cover: Investigation execution, legal procedures, or criminal referrals

## Invocation Triggers
Use this skill when:
- Processing a new claim submission
- A claim amount exceeds threshold
- Customer has previous claim history

## Usage Pattern
1. Extract claim attributes (amount, type, customer history)
2. Run against fraud detection heuristics
3. Generate risk score (0-100)
4. Recommend action based on score

## Constraints
- Never automatically deny claims (always recommend human review)
- Document all fraud reasoning for audit trail
- Treat high-risk elderly customers with extra care (avoid implicit discrimination)

## Examples
[Real scenarios with risk scoring...]

## References
- See `risk-scoring.md` for the full scoring rubric.
- See `examples.md` for validated examples.
```

In Claude's implementation, only the `name` and `description` metadata are loaded up front. If Claude decides the Skill is relevant, it reads `SKILL.md`; if it needs deeper detail, it can then read the referenced files or run bundled scripts. This is Anthropic's progressive disclosure pattern.

## Why Skills, Not Just Contexts?

You might ask: "Why not just provide this as context in the chat?" Good question. The difference matters:

| Dimension | Context | Skill |
|-----------|---------|-------|
| **Discovery** | Agent doesn't know it exists | Claude sees Skill metadata and can load the matching Skill |
| **Reusability** | Single use per conversation | Composed into multiple agents over time |
| **Versioning** | No version control | Claude API Skills can be pinned to versions; local Skills can be versioned in Git |
| **Governance** | No audit trail | Review and deployment can be governed like software artifacts |
| **Composition** | Manual (you assemble) | Claude can use multiple relevant Skills in the same task |
| **Scale** | Doesn't scale to 100+ agents | Scales to organizational level |

## The Skill Lifecycle

Claude Skills follow a lifecycle:

### 1. **Definition**
Domain experts or teams define Skills as folders based on operational knowledge. This is explicit, documented, and reviewed.

```
refund-authorization/
├─ SKILL.md
├─ refund-thresholds.md
├─ examples.md
└─ scripts/
   └─ validate_refund.py
```

### 2. **Registration**
Skills are made available to Claude. In Claude Code this can be a local Skill directory or plugin. In the API, Skills are supplied in the `container.skills` list, either as Anthropic-managed Skills or custom Skills uploaded to the workspace.

### 3. **Composition**
Claude can use multiple Skills for one task when they are available and relevant. An insurance claims workflow might make these Skills available:
- Fraud Detection skill
- Claims Processing Rules skill
- Customer Service Guidelines skill
- Policy Coverage skill

### 4. **Execution**
During work, Claude sees each Skill's metadata, loads `SKILL.md` when relevant, reads additional files as needed, and may run bundled scripts when the environment supports code execution.

### 5. **Evolution**
Skills are updated when domain knowledge changes. In the API, custom Skill versions are managed separately and production requests should pin versions when stability matters. For local Claude Code use, Git versioning and plugin releases provide the change history.

```

One operational detail matters: in the Claude API, Skills run through the code execution environment. They are powerful, but they are not a substitute for external APIs, connectors, or MCP servers when the task needs live system access.
Skill: "Claims Processing Rules"
- v1.0 (Jan 2026): Initial
- v2.0 (Mar 2026): Added expedited claims category
- v2.1 (May 2026): Updated documentation
  (Production API callers pin to v2.0 or intentionally move to latest)
```

## Skills as Governance Mechanisms

This is where Skills become powerful in enterprise settings. They are not automatic policy enforcement by themselves; they are governed instructions and resources that Claude can use consistently when the Skill is triggered.

When your skill includes this:

```
## Constraint: Customer Privacy
All customer data handling must comply with CCPA.
Automatically mask PII in any generated output.
Log all data access for audit purposes.
```

You're embedding governance guidance directly into the capability. For this to become reliable enforcement, you still need correct Skill triggering, compatible prompts, tests, tool permissions, and deployment controls.

## Skills vs Agents vs Prompts: The Hierarchy

Here's how they relate:

```
[System Prompt]
↓ (defines agent identity and reasoning style)
[Agent] ← composes → [Skill 1] (domain knowledge)
                  ↓
                  [Skill 2] (domain knowledge)
                  ↓
                  [Skill 3] (domain knowledge)
                  
                  All composed with:
                  [Context] (current conversation/task data)
```

### Prompt
Answers: "Who are you and how do you think?"
Example: "You are a thoughtful claims processor. You gather evidence before deciding."

### Skill
Answers: "What do you know about this domain?"
Example: "`detecting-claims-fraud/SKILL.md` contains the fraud workflow; `risk-scoring.md` contains the detailed rubric; `validate_claim.py` can check structured claim data."

### Context
Answers: "What's relevant right now?"
Example: "Today you're processing claims for customers in California. The fraud team flagged 3 cases."

### Agent
Answers: "How do these pieces work together?"
Example: "Compose the insurance prompt with fraud, refund, and privacy skills. Integrate with these tools. Reason about this claim."

## The Philosophy: Separation of Concerns

Skills are fundamentally about separation of concerns in agentic systems.

- **Reasoning logic** stays in the prompt (how the agent thinks)
- **Procedural knowledge and reusable resources** go into Skills (what Claude should load or run for this task)
- **Task specifics** stay in context (what the agent is doing right now)
- **Tool definitions** stay separate (what the agent can do)

This separation has profound benefits:

1. **Understandability**: A new team member can read `SKILL.md` and linked references to understand the workflow, not dig through a 5,000-word prompt.
2. **Testability**: You can validate whether the Skill triggers correctly and whether Claude follows it on representative tasks.
3. **Auditability**: When Claude makes a bad decision, you can inspect which Skill files or scripts shaped the behavior.
4. **Governance**: You control which Skills are installed, uploaded, reviewed, or made available to production calls.
5. **Evolution**: You can update Skills without rewriting 10 agent prompts, while pinning versions where stability matters.

## The Real Win: Knowledge as First-Class

In traditional software, we treat code as first-class. Version control, testing, deployment—all for code.

Skills let you treat procedural knowledge and task resources the same way. Your fraud detection workflow, refund review checklist, document template, spreadsheet script, and brand guidelines become:

- **Version controlled**: Changes are tracked
- **Reviewable**: Policies are approved before use
- **Testable**: You can validate knowledge quality
- **Discoverable**: Teams know what exists
- **Governed**: Access and usage are managed
- **Composable**: Knowledge pieces fit together cleanly

## When Skills Make Sense (Spoiler: Not Always)

Skills aren't a universal solution. They work best when:

✅ You have **reusable procedural knowledge or resources** across multiple Claude workflows
✅ You need **governance and audit trails** around that knowledge
✅ You want **discoverability** so teams know what policies exist
✅ You're building at **organizational scale** with many Claude users, workflows, or agents
✅ Your knowledge **evolves frequently** and needs versioning

❌ You probably don't need skills if:
- You're building a single, simple chatbot
- Your domain knowledge fits in a 2-3 page prompt
- You don't need governance or audit trails
- You're experimenting and prototyping
- You need real-time external data access; Skills are not a replacement for tools, connectors, or MCP servers

## Looking Forward

Skills are a design pattern for scaling agent systems thoughtfully. They solve real problems:

1. Prompt bloat → Skill composition
2. Knowledge silos → Skill discoverability
3. Governance gaps → Embedded policies
4. Reuse friction → Designed-in composability

In the next post, we'll walk through concrete decision criteria for when to use skills versus prompts versus contexts. Then we'll dive into personal agent patterns and enterprise architecture.

For now, understand this: **skills are about treating domain knowledge as a first-class, governed, discoverable component of your agent system—not as an afterthought crammed into a prompt.**
