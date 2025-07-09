---
title: 'bepph'
description: 'Simple todo list using bleeding edge tech'
link: 'https://bepph.hawari.dev'
github: 'https://github.com/fachrihawari/bepph'
publishedAt: 2023-07-23
tags: ['javascript', 'bun', 'elysia', 'prisma', 'preact', 'htmx']
---

# bepph: A Simple Todo App Experiment

So I built this little todo app called **bepph** and wanted to share what I learned. The whole idea was to see if I could make something reactive without using the usual heavy frameworks like React or Vue.

## Why I Built This

You know how sometimes you get tired of all the complexity in modern web development? That's basically what happened to me. I was curious if I could build something that feels modern but keeps things simple under the hood.

Instead of the usual React setup, I decided to try a different approach - handle most of the work on the server and use HTMX to make things interactive.

## What I Used

Here's the stack I ended up with:

**Bun** - This is pretty cool, it's like Node.js but faster and does bundling too. So no need for webpack or anything like that.

**Elysia** - A web framework made specifically for Bun. It's lightweight and has good TypeScript support.

**Prisma** - For the database stuff. I like how it generates TypeScript types automatically.

**Preact** - But here's the thing - I'm not using it as a frontend framework. Just for rendering HTML on the server.

**HTMX** - This is where it gets interesting. Instead of writing JavaScript for interactions, you just add some attributes to your HTML.

**TypeScript** - Because I like having types everywhere.

## How It Actually Works

The whole app is basically server-rendered HTML. When you click something or submit a form, HTMX handles sending the request and updating the page.

Like when you add a new todo:
```html
<button hx-post="/todos" hx-target="#todo-list">
  Add Todo
</button>
```

That's it. No state management, no complex JavaScript. Just tell HTMX where to send the request and what to update with the response.

## What I Learned

This approach is actually pretty nice for simple apps. The development experience feels familiar if you're used to server-side rendering, and you don't have to worry about client-server state synchronization.

But let's be real - it's not going to work for everything. If you're building something with complex interactions or need offline functionality, you'd probably want a proper frontend framework.

## Want to Try It?

The app is live at the link above, and all the code is on GitHub. It's a pretty small codebase, so you can probably understand the whole thing in like 30 minutes.

This was just a fun experiment, but I think there's something to be said for keeping things simple when you can.

