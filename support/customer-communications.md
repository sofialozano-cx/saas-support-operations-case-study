# Customer Communications — INC-042

> Fictional examples for portfolio demonstration.

## Initial acknowledgement

Thanks for reporting this. I can confirm the webhook event is being created on our side, and I’m investigating the delivery path now. I’m also checking whether this behavior is isolated to your configuration or part of a broader pattern. I’ll keep this ticket updated as we confirm impact.

## Incident confirmed

We’ve identified a broader issue affecting webhook delivery for multiple customers and have opened an incident with our Engineering team. Your report is linked to that investigation. API access and event creation remain available, but some webhook deliveries are delayed. We’ll share another update as soon as mitigation progress is confirmed.

## Mitigation update

Engineering has applied a mitigation and webhook delivery is recovering. We are monitoring the delivery queue and validating affected customer examples before declaring the incident resolved. No action is required from you at this stage.

## Resolution

Webhook delivery has returned to expected levels and we have validated recovery against affected events. The incident is resolved. We’re completing a post-incident review and will use the findings to improve detection and response for similar delivery issues.
