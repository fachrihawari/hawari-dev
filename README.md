# hawari.dev

## Todos

- [x] show tags on projects
- [x] show tags on posts
- [x] Add more info on detail posts
- [ ] tag filtering on posts
- [ ] fix seo on every page


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
.
├── README.md
├── astro.config.mjs
├── bun.lockb
├── ecosystem.config.cjs
├── package.json
├── public
│   ├── favicon.svg
│   └── me-square.jpg
├── src
│   ├── assets
│   │   └── img
│   │       ├── me-square.jpg
│   │       └── me.jpg
│   ├── components
│   │   ├── Navbar.astro
│   │   ├── PostCard.astro
│   │   └── ProjectCard.astro
│   ├── content
│   │   ├── config.ts
│   │   ├── posts
│   │   │   ├── deploy-vite-to-vercel-using-cli.md
│   │   │   └── markdown.md
│   │   └── projects
│   │       ├── bepph.yaml
│   │       └── sechat.yaml
│   ├── env.d.ts
│   ├── layouts
│   │   └── MainLayout.astro
│   └── pages
│       ├── blog.astro
│       ├── index.astro
│       ├── posts
│       │   └── [...slug].astro
│       ├── projects.astro
│       └── rss.xml.ts
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
