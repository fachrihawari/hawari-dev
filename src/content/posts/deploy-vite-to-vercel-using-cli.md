---
title: 'Deploy to Vercel using the cli'
description: 'We gonna learn to deploy vite using the vercel cli'
publishedAt: 2023-12-23
tags: ["vite", "vercel"]
---

Hola, this is my first post, we gonna learn how to deploy using the vercel cli, so lets go!

## Prerequisite

- Node.js, the latest LTS version is recommended
- Package manager, choose your preferred one
- Vercel account, [sign up](https://vercel.com/signup) please if you don't have one

## Install the vercel cli

Let's install the vercel cli, you can change the npm with your preferred one 

```bash
➜  npm i -g vercel
```

## Login to the vercel cli

1. Now, we have to login to our vercel account
    
    ```bash
    ➜  vercel
    ```

2. Choose your login method
    ```bash
    Vercel CLI 32.5.3
    > > No existing credentials found. Please log in:
    ? Log in to Vercel 
    ● Continue with GitHub 
    ○ Continue with GitLab 
    ○ Continue with Bitbucket 
    ○ Continue with Email 
    ○ Continue with SAML Single Sign-On 
      ─────────────────────────────────
    ○ Cancel 
    ```

3. I choose GitHub and follow the login instructions

    ```bash
    Vercel CLI 32.5.3
    ? Log in to Vercel github
    > Please visit the following URL in your web browser:
    > Success! GitHub authentication complete for fachri.hawari@gmail.com
    Congratulations! You are now logged in. In order to deploy something, run `vercel`.
    💡  Connect your Git Repositories to deploy every branch push automatically (https://vercel.link/git).
    ```

## Deploy the project

I have initiate a simple vite project, now we can use that project to deploy to vercel

1. Go to the project directory

    ```bash
    ➜  cd vite-project
    ```

2. Deploy the project

    ```bash
    ➜  vercel
    ```
    
    ```bash
    Vercel CLI 32.5.3
    ? Set up and deploy “~/vite-project”? [Y/n] y
    ? Which scope do you want to deploy to? fachrihawari
    ? Link to existing project? [y/N] n
    ? What’s your project’s name? vite-project
    ? In which directory is your code located? ./
    Local settings detected in vercel.json:
    Auto-detected Project Settings (Vite):
    - Build Command: vite build
    - Development Command: vite --port $PORT
    - Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
    - Output Directory: dist
    ? Want to modify these settings? [y/N] n
    🔗  Linked to fachrihawari/vite-project (created .vercel and added it to .gitignore)
    🔍  Inspect: https://vercel.com/fachrihawari/vite-project/8Ljqz2qXVD8WrZrKzNno2S3ggQyc [1s]
    ✅  Preview: https://vite-project-h69n7296j-fachrihawari.vercel.app [1s]
    📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
    💡  To change the domain or build command, go to https://vercel.com/fachrihawari/vite-project/settings
    ```

3. Actually the project is already deployed but it's a preview deployment, if you want to deploy it to production you can run this command

    ```bash
    ➜  vercel --prod
    ```

    ```bash
    Vercel CLI 32.5.3
    🔍  Inspect: https://vercel.com/fachrihawari/vite-project/ExLzvwecK2xBLMNsGZMW6eaePhHK [1s]
    ✅  Production: https://vite-project-ozpch580d-fachrihawari.vercel.app [1s]
    ```

## Conclusion

That's it, we have successfully deploy our vite project to vercel using the cli, if you have any question or suggestion please leave a comment below, thank you for reading this post, see you in the next post, bye!