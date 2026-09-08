# SaaS Support Ticket Routing

## Objective

Route issues according to customer impact and technical ownership without escalating every complex ticket to Engineering.

## Routing Model

### Tier 1 — Customer / Product Support
Owns initial triage, clarification, known product guidance, account checks, documented troubleshooting and customer communication.

Examples: how-to questions, known configuration issues, account settings and documented product behavior.

### Tier 2 — Technical Support
Owns deeper reproduction and evidence collection for API, webhook, authentication, browser/session, data-validation and integration issues.

Expected output: a supported resolution or a structured escalation package.

### Engineering Escalation
Used when evidence indicates unexplained product behavior, reproducible defects or shared infrastructure problems outside Support ownership.

Engineering should receive expected vs. actual behavior, impact, identifiers/timestamps, reproduction evidence, troubleshooting completed and a specific investigation request.

### Incident Path
A ticket can bypass normal sequential routing when severity or cross-customer evidence indicates a potential incident.

Triggers include:
- similar unexplained symptoms across independent accounts;
- critical workflow degradation across customers;
- rapid increase in related contacts;
- monitoring evidence of shared platform degradation;
- security/privacy concerns requiring the appropriate specialized process.

## Ownership Principle

Escalating a technical issue does not end Support ownership of the customer experience. Support continues to coordinate ticket state, expectations and communication while the technical owner investigates the underlying system.
