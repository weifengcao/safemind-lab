# Design Decision Log (DDL)

## Decision ID
SM-DDL-2026-01-001

## Decision Title
ZK Proof System Selection for Agent Identity Anchor (v1)

## Date
2026-01-XX

## Decision Owner(s)
Founding Team

## Status
Accepted (Phase 1), Revisit Planned

---

## Context
SafeMind Lab requires a zero-knowledge proof system to support the Identity Anchor for autonomous agents.
The system must prove:
- possession of a valid Non-Human Identity (NHI)
- authorization constraints (delegated authority)
- behavioral integrity signals

Key constraints:
- Low-latency verification at runtime (<50ms target)
- No trusted setup assumptions
- Long-term cryptographic safety (post-quantum horizon)
- Compatibility with recursive aggregation
- Feasible client-side generation on edge hardware (agents, robots)

---

## Options Considered

### Option A: ZK-STARKs
- Transparent setup (no trusted ceremony)
- Post-quantum secure
- Larger proof sizes
- Higher prover cost

### Option B: ZK-SNARKs (Recursive / Halo-style)
- Small proof sizes
- Fast client-side generation
- Requires trusted setup or complex ceremony
- Not post-quantum secure

### Option C: Hybrid Approach
- SNARKs for near-term runtime proofs
- STARKs for periodic anchor proofs
- Higher system complexity

---

## Decision
Adopt **ZK-STARKs as the canonical proof system** for the Identity Anchor architecture,
with an allowance for **hybrid SNARK acceleration in early prototypes** if required to meet latency targets.

---

## Rationale
This decision aligns with the following Founding Principles:

- **Safety Must Not Depend on Trust Assumptions**
  STARKs avoid trusted setup, eliminating a systemic compromise vector.

- **Assume the Agent Will Eventually Fail**
  Long-term cryptographic resilience outweighs short-term performance gains.

- **Enforcement > Detection**
  Proof validity must be enforceable independently of operator trust.

While SNARKs offer superior prover performance today, they introduce structural trust assumptions
that conflict with SafeMind Lab’s zero-trust philosophy.

---

## Trade-offs Accepted
- Higher proof generation cost on the agent side
- Larger proof transmission overhead
- Potential need for hardware acceleration (NPU / FPGA)

---

## Risks & Mitigations

### Risk: Prover latency exceeds acceptable bounds
**Mitigation**
- Recursive STARK aggregation
- Asynchronous proof generation
- Allow temporary SNARK-based acceleration for non-physical agents

### Risk: Engineering complexity slows delivery
**Mitigation**
- Start with constrained circuits (identity + authorization only)
- Defer behavioral witness inclusion to later iterations

---

## Revisit Conditions
This decision must be revisited if:
- STARK prover latency cannot be reduced below 100ms on target hardware
- Post-quantum threat model changes materially
- Regulatory guidance explicitly favors alternative schemes

---

## Links
- Founding_Principles_Decision_Rubric.md
- Identity_Anchor_Technical_Spec_v1.md
