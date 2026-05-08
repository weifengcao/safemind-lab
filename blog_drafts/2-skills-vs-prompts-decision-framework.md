# Skills vs Prompts vs Contexts: When to Use Each in Agent Systems

**Category**: Architecture | **Read Time**: 11 min | **Date**: 2026-05-08

## The Decision Problem

You're building an agent. You have domain knowledge that needs to be represented. You have three options:

1. Put it in the **system prompt**
2. Put it in **skills**
3. Pass it as **context** in the conversation

Each choice has trade-offs. This post gives you a decision framework.

## Let's Start with a Concrete Example

Imagine you're building a **support ticket routing agent** for a SaaS company. The agent needs to know:

- **Product categories**: What products does your company have?
- **Department routing rules**: Which department handles which type of issue?
- **SLA policies**: What's the response time for each priority?
- **Current team capacity**: How many people are working today?
- **Escalation thresholds**: When should an issue skip the queue?
- **Special customer rules**: VIP customers get priority treatment
- **Today's incidents**: We had a database outage affecting some customers

Where does each piece go?

## The Framework: Three Questions

Ask yourself these three questions in order:

### Question 1: Is This Knowledge Task-Specific?

**Task-specific** = Unique to this particular task or request
**Persistent knowledge** = True regardless of the task

| Piece | Task-Specific? | Where It Goes |
|-------|---|---|
| "Current team capacity" | ✓ Yes (changes daily) | Context |
| "Today's database outage" | ✓ Yes (today only) | Context |
| "VIP customers list" | ✓ Maybe (depends on today's customers) | Context or Skill |
| "Department routing rules" | ✗ No (always the same) | Prompt or Skill |
| "SLA policies" | ✗ No (always the same) | Prompt or Skill |
| "Product categories" | ✗ No (fairly stable) | Prompt or Skill |

**Decision**: Task-specific knowledge → **Context**. Everything else → next question.

### Question 2: Is This Knowledge Used by Multiple Agents or Systems?

**Single-use** = Only this one agent cares
**Multi-use** = Multiple agents need this knowledge
**Organizational** = This is governance/policy that should be discoverable

| Piece | Single-Use? | Multiple Agents? | Where It Goes |
|-------|---|---|---|
| "Department routing rules" | Single to Support Team | No (only one support agent) | Prompt |
| "SLA policies" | Single? | Maybe (billing agent also needs SLAs) | Skill |
| "VIP customer rules" | No | Yes (support, billing, feature access) | Skill |
| "Product categories" | No | Yes (support, sales, reporting) | Skill |

**Decision**: Single-use, single-agent knowledge → **Prompt**. Multi-agent or organizational → next question.

### Question 3: Does This Knowledge Need Governance, Versioning, or Discovery?

**Governance** = Someone approves changes to this knowledge
**Versioning** = Different versions might coexist
**Discovery** = Teams need to know this capability exists

| Piece | Governance? | Versioning? | Discovery? | Where It Goes |
|-------|---|---|---|---|
| "VIP customer rules" | ✓ Yes (Legal/Business review) | ✓ Maybe (rules evolve) | ✓ Yes (other teams need to know) | **Skill** |
| "Product categories" | ✓ Yes (Product team owns) | ✓ Yes (add products monthly) | ✓ Yes (sales/support need current list) | **Skill** |
| "Department routing rules" | ✓ Yes (ops team controls) | ✓ Yes (org changes) | ✓ Yes (new agents need this) | **Skill** |
| "SLA policies" | ✓ Yes (executive sign-off) | ✓ Yes (change quarterly) | ✓ Yes (compliance audits) | **Skill** |

**Decision**: Governance/versioning/discovery needed → **Skill**. Otherwise → **Prompt**.

## Decision Tree (Visual Flow)

```
Is this knowledge task-specific?
│
├─ YES → Use CONTEXT
│        (Pass it in the current conversation)
│
└─ NO → Is it used by multiple agents?
        │
        ├─ NO → Is it governed/versioned?
        │       │
        │       ├─ YES → Use SKILL
        │       │        (Treat as organizational knowledge)
        │       │
        │       └─ NO → Use PROMPT
        │               (Embed in system prompt)
        │
        └─ YES → Should be SKILL
                 (Multi-agent use needs composition)
```

## Practical Examples: The Support Routing Agent

Let me trace through our support agent example:

### Example 1: "Route urgent security issues to the security team"

1. Task-specific? NO (always the same rule)
2. Used by multiple agents? YES (support, onboarding, sales also reference security rules)
3. Needs governance? YES (CTO must approve security escalation rules)

→ **Use a SKILL** called "Security Incident Routing Policy"

### Example 2: "Today, the database is down. Affected customers: acme-corp, widget-inc. Our team has 3 people available."

1. Task-specific? YES (today only)
2. (We can stop here)

→ **Use CONTEXT** in the agent's current task

### Example 3: "When processing requests, prioritize VIP customers (Enterprise plan) with 1-hour SLA"

1. Task-specific? NO (always applies)
2. Used by multiple agents? YES (support routing, billing priority, feature access all care)
3. Needs governance? YES (business logic, maybe contractual)

→ **Use a SKILL** called "Customer Tier and SLA Policy"

### Example 4: "For Acme Corp, always route to Sarah because she's their dedicated support rep"

1. Task-specific? NO (always true for Acme)
2. Used by multiple agents? Maybe (only support agent handles Acme)
3. Needs governance? Maybe (not really—it's just an implementation detail)

→ **Use PROMPT** or **CONTEXT** (depends on whether other systems care about this assignment)
   - If it's truly just support: PROMPT
   - If billing needs to know who Acme's rep is: CONTEXT or SKILL

## Real-World Anti-Patterns

### Anti-Pattern 1: Everything in the Prompt

```
"You are a support agent. Product categories: [500 lines]
Department rules: [400 lines]
Escalation policies: [300 lines]
SLA details: [250 lines]
Customer tiers: [300 lines]..."
```

**Problem**: Your system prompt becomes unmaintainable. Updates require redeploying agents. No governance. No versioning.

**When this happens**: You're likely a solo developer or early-stage team who hasn't felt the pain yet. That's fine. As you scale, refactor into skills.

### Anti-Pattern 2: Everything in Skills

```
Skill: "Routing Decision"
Skill: "Email Format Rules"
Skill: "Common Greetings"
Skill: "Response Time Optimization"
```

**Problem**: You've turned your prompt into 20 micro-skills. Discovery becomes a maze. Composition overhead doesn't justify the benefit.

**When this happens**: You're over-abstracting. Skills aren't free—they have organizational cost. Use them for knowledge that genuinely needs governance and reuse.

### Anti-Pattern 3: Stale Contexts

You pass customer data once at the start, but it changes mid-conversation:

```
Context at 9am: "Sarah's capacity: 5 tickets"
... agent processes 3 tickets ...
9:30am: Sarah closes 5 new tickets (she's now at 2 tickets)
... agent still thinks she's at 5 ...
```

**Problem**: Context is outdated. Agent makes poor decisions based on stale data.

**When this happens**: Your context needs to be refreshed. Either refresh it between major decisions, or make it a tool that the agent calls (dynamic context).

### Anti-Pattern 4: Hidden Policies in Skills

```
Skill: "Customer Routing"
[Hundreds of lines of complex routing logic]
"When customer has >3 complaints, route to special queue"
"When account value >$100k, route to premium team"
"Only apply premium routing on Tuesdays-Thursdays"
```

**Problem**: The governance-critical policies are buried in prose. New team members don't know the rules exist. Updates get missed.

**Repair**: Separate **policy** (explicit, reviewable) from **implementation** (how the policy is executed):

```
Skill: "Premium Support Policy"
## Rule 1: Account Value
- Threshold: >$100k
- Routing: Premium team
- Approval: VP Sales
- Last updated: 2026-04-15

## Rule 2: Complaint Escalation
- Threshold: >3 complaints
- Routing: Quality team
- Approval: Head of Support
- Last updated: 2026-03-20
```

Then reference this policy in your routing skill's implementation.

## Hybrid Approaches

In practice, most real systems use all three:

```
SUPPORT ROUTING AGENT ARCHITECTURE

System Prompt:
  "You are a thoughtful support router. You gather context,
   consult policies, and route fairly."

Skills (Organizational Knowledge):
  ├─ Security Incident Routing Policy (governance: CTO)
  ├─ Customer Tier and SLA Policy (governance: CFO)
  ├─ Product Category Knowledge (governance: Product)
  └─ Team Availability Rules (governance: Ops)

Context (Task-Specific Data):
  ├─ Today's team capacity (5 support reps available)
  ├─ Current tickets in queue (23 open)
  ├─ Active incidents (database outage affecting 5 customers)
  └─ This specific support request details

Tools (Actions):
  ├─ Route to team endpoint
  ├─ Create ticket
  └─ Notify customer
```

## Decision Checklist

When you add something to your agent, ask:

- [ ] Is it **task-specific data**? → Context
- [ ] Is it **reused across agents**? → Skill
- [ ] Does it need **governance/approval**? → Skill
- [ ] Does it need **versioning**? → Skill
- [ ] Does it need **audit trails**? → Skill
- [ ] Is it **prompt-level reasoning style**? → Prompt
- [ ] Is it a **one-agent secret recipe**? → Prompt
- [ ] Is it a **published policy**? → Skill

## Scaling Rules

As your organization grows, reconsider your decisions:

**0-2 agents**: Prompts are fine. Context for varying data.

**3-10 agents**: Start extracting shared knowledge into skills. Governance starts mattering.

**10-50 agents**: Skills become essential. You need discoverability. Versioning matters.

**50+ agents**: Skills are your agent infrastructure. They're as important as APIs in traditional systems.

## Next Steps

Now that you understand the decision framework:

1. **Audit your current agents**: Where did you put knowledge? Does it match this framework?
2. **Plan migrations**: What knowledge should move from prompt → skill?
3. **Identify governance**: Which pieces need approval processes?

In the next post, we'll build our first skill step-by-step, with real examples for personal agent development.
