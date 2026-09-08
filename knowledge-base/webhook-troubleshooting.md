# Internal Runbook — Webhook Delivery Troubleshooting

> Fictional RelayDesk internal knowledge-base article.

## Use When

A customer reports that an expected webhook was delayed, failed or never appeared at their receiving endpoint.

## 1. Clarify the Symptom

Collect:
- affected event/workflow;
- event ID where available;
- approximate timestamp and timezone;
- receiving endpoint context;
- whether the issue is consistent or intermittent;
- business impact and urgency;
- when the behavior last worked normally.

Do not request secrets or full authentication credentials.

## 2. Confirm Event Creation

Determine whether RelayDesk created the expected event. If the event does not exist, investigate the upstream product/workflow trigger rather than webhook delivery.

## 3. Separate Delivery From Endpoint Failure

If an event exists, inspect the available delivery state and response evidence.

Typical branches:

- **2xx response:** receiver accepted the request; investigate downstream customer processing if the customer still reports missing behavior.
- **4xx response:** validate endpoint path, authentication requirements and receiver-side request expectations.
- **5xx/timeout:** receiving service may be unavailable or too slow; inspect retry behavior.
- **No delivery attempt / abnormal queue delay:** investigate RelayDesk delivery infrastructure.

## 4. Check Scope

Search for related reports and operational signals. Similar symptoms across independent customers materially change the hypothesis.

Ask:
- Are different accounts affected?
- Are different endpoints/domains affected?
- Is the issue isolated to one region or plan?
- Are API and authentication services healthy?
- Did a relevant platform change occur recently?

## 5. Escalate With Evidence

For unexplained platform behavior, provide:
- impact and affected scope;
- event IDs and timestamps;
- expected vs. actual behavior;
- response/delivery evidence;
- troubleshooting completed;
- cross-account pattern if present;
- a clear Engineering request.

## 6. Customer Communication

Avoid implying a customer configuration problem before evidence supports it. State what has been confirmed, what is still being investigated and when the customer should expect another update.

## Incident Signal

If independent customers show the same unexplained delivery symptom, stop treating each ticket as an isolated configuration case and initiate the incident-assessment path.
