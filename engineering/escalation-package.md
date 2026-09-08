# Engineering Escalation — INC-042

## Problem
Multiple customers report webhook events being created successfully but not delivered to independent external endpoints.

## Impact
- 5 linked customer reports
- Enterprise, Growth and Starter plans represented
- US-East, US-West, EU-West and LATAM represented
- Customer automations dependent on webhook delivery are delayed

## Evidence Collected
- Valid event IDs and creation timestamps
- Healthy core API requests
- No shared authentication failure
- Multiple independent customer endpoints affected
- Retry behavior does not restore expected delivery
- Delivery queue latency elevated

## Working Hypothesis
Shared webhook delivery infrastructure is degraded. Customer endpoint configuration is unlikely to explain the cross-account pattern.

## Request to Engineering
1. Review webhook-worker health and queue depth.
2. Check recent changes/deployments affecting delivery workers.
3. Correlate event IDs from affected customer examples with worker logs.
4. Confirm whether rollback or mitigation is required.

## Support Ownership During Escalation
Support owns customer communication, ticket linking, impact updates and validation examples. Engineering owns platform-level diagnosis and mitigation.
