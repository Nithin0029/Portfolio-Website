---
title: Essential Expense Tracker
order: 2
kind: Android
summary: An offline-first Android budgeting app with recurring payments, a friend ledger that settles up, and its own update channel. Six releases.
period: Jul – Sep 2026
role: Lead developer, with one teammate
facts:
  - label: Public releases
    value: "6"
    source: GitHub releases v3.0.0 – v3.5.0, 25 Jul – 2 Aug 2026
  - label: Kotlin files I created
    value: "72 of 91"
    source: git log --diff-filter=A per file
  - label: Lines of Kotlin
    value: "13,777"
    source: all tracked .kt files, both contributors
  - label: Room entities
    value: "6"
    source: data/local/*.kt with @Entity
technologies: [Kotlin, Jetpack Compose, Room, Hilt, WorkManager, Retrofit, Biometric API, EncryptedSharedPreferences, Google Sheets API, Gradle]
links:
  - label: Source on GitHub
    href: https://github.com/Nithin0029/Essentialkeyexpense
  - label: Download the APK
    href: https://github.com/Nithin0029/Essentialkeyexpense/releases
cover:
  src: ../../assets/img/expense-tracker.jpeg
  alt: Dashboard showing total assets, today's, this week's and this month's spending, and a category breakdown chart.
  shape: phones
gallery:
  - src: ../../assets/img/expense-tracker.jpeg
    alt: Dashboard showing total assets and a donut chart of spending by category.
  - src: ../../assets/img/expense-reports.jpeg
    alt: Reports screen with this month's income, expense and savings, and generated insights such as which category took the most spending.
  - src: ../../assets/img/expense-history.jpeg
    alt: Transaction history for September with search, income and expense totals, and each entry's category, payment method and time.
---

## Problem

Most expense apps need a connection, keep your data behind an account, or can't
represent what actually happens between friends: one person pays now and is owed
later. Recurring payments like rent or monthly investments also have to be entered
by hand, every time.

## Approach

A fully offline Android app that keeps its data on the phone, with optional Google
Sheets sync for anyone who wants a copy elsewhere. It covers budgets with alerts,
editable categories, scheduled autopay entries, and a friend ledger that tracks who
owes whom and settles up.

## Technical decisions

- **Its own update channel.** The app is distributed outside the Play Store. It
  reads a remote version file, shows the release notes, downloads the new APK and
  hands it to the installer.
- **The phone is the source of truth.** Room holds all data. Sheets sync runs as a
  WorkManager job that only starts with a network connection and survives the app
  being closed.
- **Security at the right layer.** The MPIN is stored in encrypted shared
  preferences, and the app can be unlocked with the biometric prompt instead.
- **Scheduled automation.** Autopay rules are turned into transactions by a
  periodic background worker, so they're correct even when the app hasn't been
  opened.

## Implementation

Jetpack Compose UI over MVVM view models, Hilt for dependency injection, and Room
with six entities: expenses, categories, budgets, friends, autopay rules and payment
methods. The update system is its own package: a Retrofit client for the version
file, a downloader, a repository and a Compose dialog.

## Verification and results

Six public releases went out between 25 July and 2 August 2026, v3.0.0 to v3.5.0,
each with release notes. The APKs are downloadable from GitHub, and installed copies
pick up new versions through the in-app updater.

## My role

I led the app and wrote most of it. I created 72 of the 91 Kotlin files, and 34 of
the 40 non-merge commits are mine. My work includes the update system, the MPIN and
biometric lock, autopay, budgets and alerts, category management, the friend ledger
and the Sheets spreadsheet manager.

My teammate [abhishekmannatharaj](https://github.com/abhishekmannatharaj) started
the project. They built the initial scaffold, the core expense data layer, the
quick-add overlay, the home-screen widget and the first version of the sync
scheduler.
