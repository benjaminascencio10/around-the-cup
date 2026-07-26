# around-the-cup

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_3loneRFpL9wAMYXLE5efWZAkhHsS)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact form

The contact form on the homepage sends its messages to `aroundthecuprgv@gmail.com` via `app/api/contact/route.ts`, using Gmail SMTP through [Nodemailer](https://nodemailer.com).

To enable it, copy `.env.example` to `.env.local` and set:

- `CONTACT_EMAIL_USER` — the Gmail address used to send the mail (defaults to `aroundthecuprgv@gmail.com`).
- `CONTACT_EMAIL_APP_PASSWORD` — an [App Password](https://myaccount.google.com/apppasswords) for that account (requires 2-Step Verification to be enabled on the Google account).

Set the same variables in your deployment platform (e.g. Vercel project settings) for the form to work in production.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
