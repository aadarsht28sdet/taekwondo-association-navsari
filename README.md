# 🥋 Navsari Taekwondo Academy Platform

Production-style **MERN + TypeScript Sports Academy Management Platform** and QA/SDET portfolio project.

## Project Lifecycle

**Requirements → Development → Manual QA → Automation → API/DB → Security → Performance → Docker → CI/CD → Deployment**

## Core Features

- Public sports website
- Student management
- Parent and student portals
- Coach and admin portals
- Attendance
- Belt progression
- Fees and invoices
- Tournament management
- Achievements and top performers
- Digital student ID + QR verification
- Certificates
- Gallery, events and news
- Notifications and reports
- Authentication and RBAC
- Audit logs

## Stack

### Frontend
React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, TanStack Query, Zustand, React Hook Form, Zod, Axios.

### Backend
Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, HTTP-only cookies, Helmet, rate limiting.

### QA
Manual Testing, Playwright, TypeScript, API Testing, Database Testing, Supertest, k6, Accessibility, Security Testing.

### DevOps
Git, GitHub, Docker, Docker Compose, GitHub Actions, Container Registry, Staging and Production.

## Repository

```text
navsari-taekwondo-academy/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── types/
│   ├── validation/
│   └── ui/
├── tests/
│   ├── playwright/
│   ├── api/
│   └── performance/
├── QA/
├── docs/
├── docker/
├── .github/workflows/
├── docker-compose.yml
├── package.json
├── README.md
└── .gitignore
```

## QA Strategy

```text
Manual QA
  ↓
Bug Fixing
  ↓
Regression
  ↓
Playwright
  ↓
API + DB
  ↓
Security
  ↓
Performance
  ↓
Accessibility
  ↓
Docker
  ↓
CI/CD
```

Targets:

- 500–800+ meaningful manual scenarios
- 100–150+ Playwright tests
- 100–200+ API tests
- 150–250+ unit tests
- Multiple realistic k6 scenarios

## Docker Architecture

```text
Docker Network
 ┌────────────┬────────────┬────────────┐
 │            │            │            │
Web          API        MongoDB        Redis
:5173       :5000       :27017        :6379
```

Docker will support local development, integration tests, Playwright, CI and deployment.

## CI/CD

```text
Git Push
  ↓
Lint
  ↓
Type Check
  ↓
Unit Tests
  ↓
API Tests
  ↓
Build
  ↓
Docker Build
  ↓
Security Scan
  ↓
Playwright
  ↓
Deploy
```

## Current Status

**Phase:** Project initialization

**Next:** Create the complete monorepo foundation, React app, Express API, MongoDB connection, Docker Compose and health checks.

## Scope Rule

First production scope:

```text
Authentication
Student Management
Attendance
Belt
Fees
Tournament
Achievements
Certificates
Portals
```

Advanced AI/RAG/Arduino/mobile/live-scoring/e-commerce features come later.

## Portfolio Objective

Demonstrate the complete ability to:

**Build → Test → Automate → Secure → Performance Test → Containerize → Integrate CI/CD → Deploy**
