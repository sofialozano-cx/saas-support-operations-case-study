# Post-Incident Review — INC-042

> Fictional portfolio scenario. This document demonstrates a blameless support-operations review process.

## Executive Summary

Webhook delivery was degraded from the first customer report at 09:12 UTC until incident resolution at 11:24 UTC. The core API, authentication and event creation remained healthy. A regression introduced by a webhook-worker deployment increased delivery-queue latency. Engineering rolled back the deployment and Support validated recovery before closing the incident.

## What Happened

Support initially received what could reasonably appear to be an isolated webhook-delivery report. Additional reports from independent customers, plans and regions created a cross-account pattern. Support compared the reports, eliminated several customer-specific hypotheses and declared INC-042 35 minutes after the first report.

Engineering used the escalation evidence to focus on the shared delivery layer and correlated the degradation with a recent webhook-worker deployment.

## What Worked

- Similar reports were linked instead of being handled as unrelated tickets.
- Support checked API health, authentication, event creation and customer endpoint diversity before escalating.
- The Engineering handoff included customer impact and technical evidence.
- Customer communication was centralized around the incident.
- Resolution was validated rather than assumed immediately after rollback.

## Gaps

### Detection
The first signal came from customers. Queue-depth and delivery-latency monitoring should detect this class of degradation before a meaningful number of customers need to report it.

### Intake consistency
Webhook tickets did not initially require the same diagnostic fields. A standard macro should request event IDs, timestamps, endpoint behavior and affected workflows.

### Incident linkage
Support needs a documented rule for when repeated symptoms across accounts should move from individual troubleshooting to incident assessment.

### Knowledge reuse
The investigation steps should become an internal runbook so future responders can distinguish customer endpoint failures from shared platform delivery failures more quickly.

## Key Lesson

A technically useful Support escalation is not simply “multiple customers are having a problem.” It shows what is affected, what is healthy, which hypotheses have already been tested, how broad the impact appears to be and what Engineering is being asked to investigate.

## Follow-Up

Actions from this review are tracked in `improvement-plan.md` and reflected in the escalation matrix, ticket-routing model and webhook troubleshooting runbook.
