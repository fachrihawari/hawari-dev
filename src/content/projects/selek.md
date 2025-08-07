---
title: 'selek'
description: 'A real-time messaging application (Slack clone) built with modern web technologies.'
link: 'https://selek.hawari.dev'
github: 'https://github.com/fachrihawari/selek'
publishedAt: 2025-08-07
tags: ['typescript', 'nestjs', 'react', 'socket.io', 'postgresql', 'bun']
---

# Selek 💬

A real-time messaging application (Slack clone) built with modern web technologies, featuring workspaces, channels, direct messages, and real-time communication.

## Tech stack ⚡

- **NestJS** (with **Bun** runtime) – backend framework with TypeScript
- **React 18** – frontend framework with TypeScript
- **PostgreSQL** (with postgres.js) – database
- **Socket.IO** – real-time WebSocket communication
- **JWT** – stateless authentication
- **TailwindCSS** – utility-first CSS styling
- **React Router v7** – SPA routing
- **SWR** – server state management
- **Vite** – build tool for frontend
- **Docker** – containerization and deployment

## Key features ✨

- 🏢 Multi-tenant workspaces with role-based permissions
- 💬 Real-time messaging with Socket.IO
- 📁 Conversation types: channels, group messages, and direct messages
- 🔐 User authentication with JWT-based sessions
- 👥 Workspace management: add/remove members with roles
- 📱 Responsive design optimized for mobile and desktop
- 🔔 Toast notifications and sound alerts
- ♾️ Infinite scroll for message history
- ⚡ Optimistic UI updates for smooth UX
- 🎨 Consistent orange-themed design system

## What I learned 💡

Building Selek taught me a lot about:

- 🔒 Implementing role-based access control with workspace and conversation permissions.
- ⚡ Using Socket.IO for real-time features like message delivery, user presence, and room-based isolation.
- 🗄️ Working with PostgreSQL migrations and database seeding for multi-tenant architecture.
- 🎯 Building responsive chat interfaces with infinite scroll and optimistic updates.
- 🐳 Setting up Docker deployment with proper environment configuration.

## Live demo 🌐

Try it at [selek.hawari.dev](https://selek.hawari.dev). Create workspaces, invite members, and experience real-time messaging!
