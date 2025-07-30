---
title: 'county'
description: 'County is a simple counter service that fits your needs.'
link: 'https://county.hawari.dev'
github: 'https://github.com/fachrihawari/county'
publishedAt: 2024-11-30
tags: ['typescript', 'bun']
---



# County 🔢

County is a simple counter service that provides a REST API for incrementing and retrieving counts associated with namespaces and keys. It’s designed to be stateless, making it easy to use in various applications.

## Why I built it 🤔

I wanted to create a lightweight service that allows users to maintain simple counters without the overhead of a full database. County is perfect for scenarios where you need to track counts for different keys and namespaces, such as feature usage, event tracking, or simple analytics.

I use County in my own projects to keep track of various metrics without the need for complex infrastructure.

## What it does 📊

- Increment a count for a given namespace and key.
- Retrieve the current count for a given namespace and key.
- If a counter doesn’t exist, it’s created automatically.

## Tech stack ⚡

- **TypeScript** – type safety
- **Bun** – fast runtime and package manager

## Key features ✨

- REST API with two endpoints:
  - `GET /api/count` – fetch the current count for a namespace/key
  - `POST /api/count/up` – increment the count for a namespace/key
- Handles missing parameters with clear error messages.
- Deployed at [county.hawari.dev](https://county.hawari.dev)

## What I learned 💡

Building a stateless API for simple counting is straightforward but useful for many scenarios. Using Bun made setup and development fast and efficient.

## Live demo 🌐

Try the API at [county.hawari.dev](https://county.hawari.dev). See the docs for usage examples.
