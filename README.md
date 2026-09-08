<div align="center">

# SaaS Support Operations Case Study

### Incident Response · Technical Support · Customer Communication · Support Operations

![React](https://img.shields.io/badge/Frontend-React-4F46E5?style=flat-square)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-6D28D9?style=flat-square)
![Support](https://img.shields.io/badge/Focus-Technical%20Support-7C3AED?style=flat-square)
![Data](https://img.shields.io/badge/Scenario-Fictional-8B5CF6?style=flat-square)

</div>

---

## Overview

This project simulates an end-to-end **Support Operations response to a SaaS incident**. Rather than treating customer tickets as isolated requests, the case follows the full operational chain from incoming reports to pattern recognition, technical investigation, Engineering escalation, customer communication, resolution and post-incident improvement.

The fictional product is **RelayDesk**, a B2B SaaS platform that helps companies automate customer workflows through APIs and webhooks.

The central scenario begins when multiple customers report that webhook events are being generated successfully inside RelayDesk but are not reaching their external endpoints.

> RelayDesk, its customers, tickets, incident and technical evidence are entirely fictional and were created for portfolio purposes. No real customer, employer or production data is used.

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

At 09:12 UTC, the first customer reports delayed webhook delivery. Within 35 minutes, Support receives similar reports from customers on different plans and regions.

Initial ticket-level troubleshooting confirms that:

- events are successfully created inside RelayDesk;
- affected customers use different receiving endpoints;
- retries do not restore normal delivery;
- API authentication remains healthy;
- the issue appears concentrated in webhook delivery rather than the core API;
- multiple independent customers show the same failure pattern.

This evidence changes the working hypothesis from **customer configuration issue** to **possible shared platform incident**.

---

## What This Project Demonstrates

| Area | Evidence |
|---|---|
| **Customer Support** | Triage, clarification, expectation-setting and customer updates |
| **Technical Support** | Reproduction, HTTP evidence, webhook investigation and hypothesis testing |
| **Incident Response** | Impact assessment, severity, timeline, ownership and resolution validation |
| **Engineering Escalation** | Structured evidence package with reproduction steps and business impact |
| **Support Operations** | Routing, macros, escalation matrix, knowledge management and process improvements |
| **Software Engineering** | React + TypeScript application with typed case data and reusable UI components |

---

## Repository Structure

```text
saas-support-operations-case-study/
├── src/                       # React + TypeScript application
├── public/
│   └── data/                  # fictional incident data
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

[GitHub Profile](https://github.com/sofialozano-cx)

</div>
