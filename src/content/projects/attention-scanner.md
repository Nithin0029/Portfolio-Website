---
title: Attention Scanner
order: 1
kind: Computer vision
summary: Tracks several people through one webcam and scores how attentive each one is, in real time, with no per-person setup.
period: Nov 2025 – Sep 2026
role: Sole developer
facts:
  - label: Test files
    value: "24"
    source: tests/test_*.py
  - label: Lines of Python
    value: "7,283"
    source: all tracked .py files, 3,878 of them outside tests/
  - label: Commits
    value: "20, all mine"
    source: git log --all
  - label: API endpoints
    value: "6"
    source: src/api/server.py
technologies: [Python, MediaPipe, OpenCV, NumPy, FastAPI, React, Vite, Docker, unittest]
links:
  - label: Source on GitHub
    href: https://github.com/Nithin0029/Attention-Scanner
  - label: Live demo
    href: https://attention-scanner.vercel.app/
cover:
  src: ../../assets/img/attention-scanner.jpg
  alt: The desktop analyser labelling people as engaged, distracted, sleeping, drowsy, hand raised and yawning, with live eye and mouth ratios beside each face.
---

## Problem

Judging whether a room is paying attention doesn't scale when one person has to
watch everyone. Automating it is harder than it looks: if every video frame is
classified on its own, the output flickers between states and no one can trust it.

## Approach

Detect every face, keep a stable identity for each person across frames, read eye,
mouth and head-pose geometry from the facial landmarks, and classify behaviour over
time rather than frame by frame. Each person ends the session with a score out of
100 and a report that can be exported as JSON or CSV.

## Technical decisions

- **Two thresholds, not one.** An eye counts as closed when its aspect ratio falls
  to 0.20, but only counts as open again at 0.23. Yawns start at a mouth ratio of
  0.30 and end at 0.18. States stop oscillating at the boundary.
- **Duration gates.** Eyes must stay closed for 1.5 s, a yawn must last 0.5 s and
  looking away must last 1.0 s before anything is reported. This is what separates
  a blink from drowsiness.
- **A search radius that grows.** A face that disappears keeps its ID for a
  while. Its matching radius widens the longer it's missing, up to three times
  the normal 150 px, so someone who ducks out of frame comes back as the same
  person.
- **Weighted scoring.** Drowsiness costs the full weight, yawning 0.75 and
  distraction 0.5, because they aren't equally serious.
- **One pipeline, two front ends.** The same analysis code runs as a desktop OpenCV
  app and as a FastAPI service behind a React dashboard.

## Implementation

The pipeline runs in stages: face detection, MediaPipe's FaceLandmarker model,
feature extraction (eye and mouth ratios, head pose from `solvePnP`), a five-frame
moving average, behaviour classification, per-person sessions, then scoring and
reporting. The FastAPI service exposes start, frame, status, summary and stop
endpoints plus a health check, and the service ships with a Dockerfile.

## Verification and results

24 test files cover the eye and mouth ratios, head pose, the tracker, smoothing,
behaviour analysis, scoring, sessions and reports, plus integration tests that run
the full pipeline end to end. Roughly half of the 7,283 lines of Python are tests.

It began as a 24-hour build at NEXATHON’25 in November 2025, where it placed second.
That version also detected raised hands. I rebuilt it as the tested pipeline in the
repository between August and September 2026.

## My role

I wrote all of it: the pipeline, the tracker, the scoring and reporting, the API, the
dashboard and the tests. Every commit in the repository is mine.
