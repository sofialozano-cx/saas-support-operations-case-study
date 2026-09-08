<div align="center">

# SaaS Support Operations Case Study

### Incident Response · Technical Support · Customer Communication · Support Operations

[**→ Open Live Incident Console**](https://saas-support-operations-case-study.vercel.app/)

![React](https://img.shields.io/badge/Frontend-React-4F46E5?style=flat-square)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-6D28D9?style=flat-square)
![Support](https://img.shields.io/badge/Focus-Technical%20Support-7C3AED?style=flat-square)
![Status](https://img.shields.io/badge/Status-Live-22C55E?style=flat-square)
![Scenario](https://img.shields.io/badge/Scenario-Fictional-8B5CF6?style=flat-square)

</div>

---

## Overview

This project simulates an end-to-end **Support Operations response to a SaaS incident**. Rather than treating customer tickets as isolated requests, the case follows the full operational chain from incoming reports to pattern recognition, technical investigation, Engineering escalation, customer communication, resolution and post-incident improvement.

The fictional product is **RelayDesk**, a B2B SaaS platform that helps companies automate customer workflows through APIs and webhooks.

The central scenario begins when multiple customers report that webhook events are being generated successfully inside RelayDesk but are not reaching their external endpoints.

> RelayDesk, its customers, tickets, incident and technical evidence are entirely fictional and were created for portfolio purposes. No real customer, employer or production data is used.

---

## Live Incident Console

The project includes a responsive **React + TypeScript incident operations console** deployed on Vercel.

**[Launch the live application →](https://saas-support-operations-case-study.vercel.app/)**

The interface lets reviewers move through five operational views:

- **Overview** — impact, severity, key timestamps and investigation summary;
- **Tickets** — linked customer reports across plans and regions;
- **Incident** — chronological response timeline;
- **Evidence** — technical signals used to narrow the failure domain;
- **Operations** — concrete post-incident process improvements.

---

## Case Objective

Demonstrate how Customer Support, Technical Support, Engineering and Support Operations can work together when apparently independent customer reports reveal a broader product incident.

```text
Customer reports
      ↓
Ticket triage
      ↓
Pattern recognition
      ↓
Incident declaration
      ↓
Technical investigation
      ↓
Engineering escalation
      ↓
Customer communication
      ↓
Resolution & validation
      ↓
Post-incident improvements
```

---

## Scenario

At **09:12 UTC**, the first customer reports delayed webhook delivery. Within 35 minutes, Support receives similar reports from customers on different plans and regions.

Initial ticket-level troubleshooting confirms that events are successfully created, affected customers use independent endpoints, retries do not restore normal delivery, authentication remains healthy and the shared symptom is concentrated in webhook delivery.

This changes the working hypothesis from **customer configuration issue** to **possible shared platform incident**. At 09:47 UTC, INC-042 is declared. Engineering later correlates the degradation with a recent webhook-worker deployment. The deployment is rolled back, the queue recovers and Support validates affected examples before resolution at 11:24 UTC.

---

## What This Project Demonstrates

| Area | Evidence |
|---|---|
| **Customer Support** | Triage, clarification, expectation-setting and customer updates |
| **Technical Support** | HTTP/API reasoning, webhook investigation and hypothesis testing |
| **Incident Response** | Impact assessment, severity, timeline, ownership and recovery validation |
| **Engineering Escalation** | Structured evidence package, impact scope and actionable Engineering request |
| **Support Operations** | Routing, escalation criteria, communication consistency, knowledge and process improvements |
| **Software Engineering** | React + TypeScript + Vite application with typed case data and responsive UI |

---

## Case Artifacts

| Artifact | Purpose |
|---|---|
| `case-study/incident-report.md` | Incident summary, impact, severity, root cause and validation |
| `case-study/post-incident-review.md` | Review of detection, response, recovery and lessons learned |
| `case-study/improvement-plan.md` | Prioritized operational actions after the incident |
| `engineering/escalation-package.md` | Evidence-based handoff from Support to Engineering |
| `support/customer-communications.md` | Initial, incident, mitigation and resolution messaging |
| `support/escalation-matrix.md` | Criteria for troubleshooting vs. technical/incident escalation |
| `support/ticket-routing.md` | Routing and ownership model for incoming SaaS support issues |
| `knowledge-base/webhook-troubleshooting.md` | Internal troubleshooting runbook for webhook delivery reports |

---

## Technical Architecture

```text
React UI
   ↓
Typed TypeScript case data
   ↓
Operational views
   ├── Overview
   ├── Tickets
   ├── Incident
   ├── Evidence
   └── Operations

Vite → production build → Vercel
```

The application intentionally keeps the scenario data local and synthetic so the repository remains transparent and fully reviewable.

---

## Repository Structure

```text
saas-support-operations-case-study/
├── src/
│   ├── App.tsx
│   ├── data.ts
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── case-study/
│   ├── incident-report.md
│   ├── post-incident-review.md
│   └── improvement-plan.md
├── support/
│   ├── customer-communications.md
│   ├── escalation-matrix.md
│   └── ticket-routing.md
├── engineering/
│   └── escalation-package.md
├── knowledge-base/
│   └── webhook-troubleshooting.md
├── package.json
├── tsconfig.app.json
├── vite.config.ts
└── README.md
```

---

## Portfolio Context

I have a professional background in **Customer Experience, CRM and customer-facing operations** and I am currently pursuing **Software Engineering**. This fictional case study is designed to demonstrate how I approach the technical and operational layer of SaaS support.

It is a portfolio simulation and is not presented as professional incident-response experience from a previous employer.

---

<div align="center">

### Sofia Lozano
Customer Experience · Technical Support · CRM & Support Operations

[Live Case Study](https://saas-support-operations-case-study.vercel.app/) · [GitHub Profile](https://github.com/sofialozano-cx)

</div>
