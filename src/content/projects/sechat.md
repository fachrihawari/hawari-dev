---
title: 'sechat'
description: 'Realtime chat apps to communicate with anyone'
link: 'https://sechat.hawari.dev'
github: 'https://github.com/fachrihawari/sechat'
publishedAt: 2023-12-13
tags: ['javascript', 'react', 'socket.io', 'bun', 'mongodb']
---


# Sechat 💬

Sechat is a modern, real-time chat application that enables users to communicate instantly and securely. It features email-based authentication with OTP verification and leverages Socket.io for seamless real-time messaging.

## Tech stack ⚡

- **React 18** – frontend framework
- **Vite** – build tool and dev server
- **Tailwind CSS** – styling
- **Socket.io** – real-time communication (client & server)
- **Bun** - backend runtime
- **Express.js** – backend router
- **MongoDB** (with **Mongoose**) – database + ODM
- **JWT** – stateless authentication
- **Resend** – email service for OTP delivery
- **Docker & Docker Compose** – containerization and orchestration
- **Nginx & Traefik** – web server and reverse proxy

## Key features ✨

- 💬 Real-time one-on-one messaging using Socket.io
- ✉️ Email-based authentication with 6-digit OTP verification
- 🔑 Stateless JWT authentication and auto-registration for new users
- 🟢 Online/offline status indicators for users
- 🗂️ Persistent chat history stored in MongoDB
- 🟣 Unread message indicators and message bubbles
- 📱 Simple UI with auto-scroll to latest messages
- 🔗 REST API for authentication, user listing, and chat history
- 🔒 Secure socket connections with token validation and CORS
- 🐳 Dockerized deployment with Nginx and Traefik support

## What I learned 💡

- How we can share the same code between client and server in a monorepo setup.
- Containerization with Docker and Docker Compose for easy deployment on the monorepo setup.
- Securing socket connections with token validation and CORS.


## Live demo 🌐

Try it at [sechat.hawari.dev](https://sechat.hawari.dev). The API is available at [sechat-api.hawari.dev](https://sechat-api.hawari.dev).