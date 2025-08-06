---
title: 'sechat'
description: 'Realtime chat apps to communicate with anyone'
link: 'https://sechat.hawari.dev'
github: 'https://github.com/fachrihawari/sechat'
publishedAt: 2023-12-13
tags: ['javascript', 'react', 'socket.io', 'nodejs', 'mongodb']
---


# Sechat 💬

Sechat is a modern, real-time chat application that enables users to communicate instantly and securely. It features email-based authentication with OTP verification and leverages Socket.io for seamless real-time messaging.

## What it does 📱

- Real-time one-on-one messaging between users
- Email-based login with 6-digit OTP verification
- Online status indicators for users
- Persistent chat history with unread message indicators
- Responsive, mobile-friendly UI with message bubbles and auto-scroll

## Tech stack ⚡

- **React 18** – frontend framework
- **Vite** – build tool and dev server
- **Tailwind CSS** – styling
- **Socket.io** – real-time communication (client & server)
- **Node.js** (with **Bun** runtime) – backend
- **Express.js** – API server
- **MongoDB** (with **Mongoose**) – database
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
- 📱 Responsive, mobile-friendly UI with auto-scroll to latest messages
- 🔗 REST API for authentication, user listing, and chat history
- 🔒 Secure socket connections with token validation and CORS
- 🐳 Dockerized deployment with Nginx and Traefik support

## What I learned 💡

This project involved implementing secure authentication using stateless JWT and time-limited OTP codes for email login 🔐. I used Socket.io to enable real-time, low-latency messaging and online presence tracking ⚡. The RESTful APIs for user, authentication, and chat endpoints were designed with input validation and CORS for security 🛡️. Building the app as a monorepo with shared code packages ensured consistent types and logic between client and server 🤝.

## Live demo 🌐

Try it at [sechat.hawari.dev](https://sechat.hawari.dev). The API is available at [sechat-api.hawari.dev](https://sechat-api.hawari.dev).