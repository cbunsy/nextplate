## About this project

I am making this project to make a modern templates that will serve as the basic foundation for developing future big applications.

## Getting Started

1. Install dependencies using pnpm:

```bash
$ pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables

```bash
$ cp .env.example .env.local
```

3. Run the development server:

```bash
$ pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Milestone

Here are the list of features/technologies to be used:

- [x] Eslint & Prettier Configuration for NextJS
- [x] Husky & Linted-Staged Configuration for NextJS
- [x] Git committing with [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [ ] Authentication with [NextAuth.js](https://next-auth.js.org/)
- [ ] ORM using [Prisma](https://www.prisma.io/)
- [x] Styled using [Tailwind CSS](https://tailwindcss.com/)
- [ ] UI Components built using [Radix UI](https://www.radix-ui.com/)
- [ ] Validations using [Zod](https://github.com/colinhacks/zod)
- [ ] Form using [React Hook Form](https://react-hook-form.com/)
- [x] Written in Typescript

## Git Commit

You can use usual commit functionality or use `commitizen`.

1. Install Commitizen globally

```bash
$ pnpm add install commitizen -g
```

2. Commit your changes

```bash
$ cz
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
