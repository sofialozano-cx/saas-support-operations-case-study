# INC-042 — Webhook Delivery Degradation

> Fictional portfolio scenario. No real customer or employer data.

## Summary

RelayDesk experienced degraded webhook delivery between 09:12 and 11:24 UTC. Events continued to be created successfully, but delivery workers processed the outbound queue with abnormal latency. Five customer reports across four regions were linked to the incident.

## Impact

- Customer-facing symptom: webhook-driven automations were delayed or did not trigger within expected time.
- Confirmed reports: 5.
- Regions represented: US-East, US-West, EU-West and LATAM.
- Core API: healthy.
- Authentication: healthy.
- Event creation: healthy.
- Webhook delivery layer: degraded.

## Severity

**SEV-2** — significant degradation of an important product capability affecting multiple customers, without evidence of total platform unavailability.

## Root Cause

A recent webhook-worker deployment introduced a queue-processing regression. Engineering rolled back the deployment and monitored queue depth until delivery latency returned to baseline.

## Resolution Validation

Support validated recovery through queue-health indicators and affected customer examples before communicating resolution.
