# Founding Principles → Decision Rubric
Status: Committed

This rubric translates SafeMind Lab’s founding principles into **explicit decision rules**.
When trade-offs arise, decisions must be justified using this rubric.

---

## Principle 1: Safety Must Not Depend on Model Alignment

**Decision Rule**
If a system relies on an LLM behaving correctly to remain safe, it is not acceptable.

**Approve When**
- Safety is enforced via cryptographic, hardware, or kernel-level controls
- Failure of the reasoning layer cannot cause irreversible harm

**Reject When**
- The proposal assumes prompt discipline or model alignment as the primary defense

---

## Principle 2: Enforcement > Detection

**Decision Rule**
We prefer mechanisms that *prevent* bad actions over those that merely observe them.

**Approve When**
- Controls sit inline or on the critical execution path
- Actions are blocked by default unless explicitly authorized

**Reject When**
- The system only raises alerts or logs incidents after execution

---

## Principle 3: Continuous, Hardware-Bound Identity

**Decision Rule**
Identity must be provable continuously, not asserted once.

**Approve When**
- Identity is tied to hardware attestation, enclave state, or boot integrity
- Credentials are ephemeral and revocable in real time

**Reject When**
- Static API keys or long-lived credentials are used
- Identity cannot be invalidated mid-execution

---

## Principle 4: Latency Is a First-Class Constraint

**Decision Rule**
A safety mechanism that misses real-time deadlines is a failure.

**Approve When**
- Enforcement latency is bounded and measurable
- The system degrades safely under load

**Reject When**
- Safety checks introduce unbounded or cloud-dependent delays

---

## Principle 5: Assume the Agent Will Eventually Fail

**Decision Rule**
Design for adversarial misuse, drift, or compromise by default.

**Approve When**
- Systems fail closed
- Blast radius is explicitly limited

**Reject When**
- The design assumes benign or cooperative behavior

---

## Escalation Rule
If a proposal violates one principle to satisfy another, the conflict **must be documented**
in a Design Decision Log (DDL) with explicit justification.
