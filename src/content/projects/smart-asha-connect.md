---
title: Smart ASHA Connect
order: 3
kind: Healthcare, team build
summary: First prize at a 24-hour hackathon. A progressive web app for ASHA community health workers, with a Python service that scores patient risk from their vitals and explains it in plain language.
period: Feb 2026
role: Team project, T7 Thunderstorms
facts:
  - label: Result
    value: First prize, ₹8,000
    source: 24-hour hackathon, Kristu Jayanti University, 10–11 Feb 2026
  - label: Team
    value: T7 Thunderstorms
    source: repository README and commit history
  - label: Risk levels
    value: Low, Medium, High
    source: backend/ml/risk_engine.py
  - label: Language model
    value: Llama 3, local
    source: backend/llm/llama_runtime.py runs it through Ollama
technologies: [React, TypeScript, Vite, PWA, Python, Ollama]
links:
  - label: Source on GitHub
    href: https://github.com/Nithin0029/ASHA-AI
  - label: Live demo
    href: https://asha-ai-nine.vercel.app/
---

## Problem

ASHA workers visit families across rural India and record vitals on paper. Nothing
flags which patients are getting worse, and nothing connects today's visit to the
readings taken three months ago.

## Approach

A tablet-friendly progressive web app for registering patients, recording visits
and raising SOS alerts, backed by a Python service. The service scores each visit's
risk from the recorded vitals, compares it with earlier visits to find a trend, and
asks a local language model to explain the result in plain words.

## Technical decisions

- **Rules as a fallback.** If the trained model fails to load or predict, the risk
  engine falls back to deterministic clinical rules. A health tool that returns
  nothing is worse than one that returns a cautious answer.
- **Check readings before inference.** Vitals are range-checked against
  physiological limits first, so an impossible blood-pressure entry is rejected
  instead of being scored.
- **A local model.** Llama 3 runs through Ollama on the same machine, not a hosted
  API. There's no per-call cost, and patient data never leaves the device.
- **Trend over snapshot.** Each visit gets its own risk, so the output can say "getting
  worse" instead of only "high".

## Implementation

The web app is React and TypeScript on Vite, set up as an installable PWA. The
Python backend is split into `ml/` (features, predictor, sanity rules, risk engine)
and `llm/` (a Llama 3 runtime, a visit analyser and an explainer).

## Verification and results

Built in 24 hours at the Kristu Jayanti University hackathon on 10–11 February 2026,
where it won first prize and a ₹8,000 award. The app is deployed as a live demo.

## My role

Built with my team, T7 Thunderstorms. My part was the web app side: setting it up as
an installable progressive web app, the login flow and the project documentation.
