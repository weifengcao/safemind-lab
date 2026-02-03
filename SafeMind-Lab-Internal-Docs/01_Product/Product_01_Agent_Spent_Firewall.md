# Product 01 – Agent Spent Firewall (ASF)
Status: Draft → Target Committed (Seed)

## Purpose
Prevent financial, compute, and operational loss caused by autonomous agent misbehavior
(looping, runaway tool calls, compromised agents).

## Problem Statement
Autonomous agents can exhaust six-figure budgets within minutes due to:
- infinite planning/execution loops
- unauthorized tool usage
- prompt injection causing excessive API calls
- lack of real-time enforcement

## Core Capabilities
- Inline interception of all outbound tool calls
- Budget enforcement (tokens, $ spend, rate, energy/torque for physical systems)
- Policy-based allow / block / throttle decisions
- Cryptographic attestation of approved actions

## Enforcement Model
- Stateful runtime proxy (sidecar or gateway)
- Default-deny unless policy + identity + certificate satisfied
- Deterministic behavior under load

## Policy Types
- Per-session budget
- Per-tool spend caps
- Time-window rate limits
- Action-class allowlists
- Physical resource envelopes (Phase 3)

## Non-Goals
- Model alignment
- Prompt correctness
- Post-hoc alerting only

## Success Metrics
- <10ms enforcement latency (software)
- <5ms (kernel / hardware mode)
- Immediate ROI (budget reduction visible in first billing cycle)

## Pull-Through
ASF adoption enables:
- Identity Anchor (who is allowed to spend)
- Control Plane (what plans are allowed)
