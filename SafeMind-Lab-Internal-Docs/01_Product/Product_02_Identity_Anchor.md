# Product 02 – Continuous Identity Anchor (CIA)
Status: Hypothesis → Draft

## Purpose
Provide continuous, cryptographically provable Non-Human Identity (NHI)
for autonomous agents and physical systems.

## Problem Statement
Static API keys and human credentials make:
- attribution impossible
- compromise undetectable
- revocation too slow

## Core Capabilities
- Hardware-bound agent identity
- Ephemeral credentials
- Continuous behavioral verification
- Real-time revocation

## Identity Model
- DID-based Non-Human Identity
- Verifiable Credentials for delegated authority
- ZK proofs for privacy-preserving authorization

## Behavioral Trust Signals
- Tool-call sequencing grammar
- Latency jitter patterns
- Semantic intent drift (embedding-based)
- Physical telemetry envelopes (robots)

## Enforcement Integration
- Identity proof required for every privileged action
- Failure to generate proof = automatic deny

## Non-Goals
- Human IAM replacement
- Social trust or reputation systems

## Risks
- False positives locking out valid agents
- Prover latency on edge hardware

## Success Metrics
- Proof verification <50ms
- Revocation <1s
