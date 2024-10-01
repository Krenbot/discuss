# Discuss
https://discuss-indol-five.vercel.app/

## Description

Share your ideas, spark discussions, and connect with people intrested in the same topics as you! Sign in to post a topic or a comment, and read what others are saying about the subject.

Discuss was a project I used to learn the ins and outs of the specific features Next has to offer. As a web developer, we should always be looking to use and adapt to new technologies and frameworks.

Not only was this course more exposure to Typescript, which I am getting familiar with, but it also helped build foundational knowledge of server/client side rendering and how Next can optimize these situations.

## Table of Contents
  1) [Technologies](#technologies)
  2) [Challenges](#challenges)
  3) [Future Implementations](#future-implementation)
  4) [User Story](#user-story)
  5) [Installation](#installation)
  6) [Credits](#credits)
  7) [License](#license)

## Technologies
* [React](https://react.dev/) - Front-end library.
* [Next.js](https://nextjs.org/docs) - Routing, rendering, optimizations, etc.
* [Next auth](https://next-auth.js.org/getting-started/introduction) - Authentication.
* [Zod](https://zod.dev/) - Data validation.
* [Tailwind](https://tailwindcss.com/docs/installation) - Styling.
* [Prisma](https://www.prisma.io/docs) - ORM Database management.
* [Vercel](https://vercel.com/) - Hosting.

## Challenges
* Rendering Strategies - when to use SSR/CSR, PPR, skeletons, and more.
* Tailwind - first project using Tailwind instead of CSS/SCSS. Challenging to learn inline styling syntax.

## Future Implementation
* Pages with entire threads rather than just topics.
* Topic formatting - allow spaces.
* Allow unregistered users to post topics.
* Redesign UI to be less minimalistic.

## User Story
```md
AS A internet information searcher
I WANT to have a forum to talk about topics
SO THAT I can learn more about web-based topics.
```

## Installation
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Host locally or ask for .env files.

## Credits
* Project came from a tutorial by [Stephen Grider](https://zerotomastery.io/)'s [Next.js Complete Developer's Guide](https://gale.udemy.com/course/next-js-the-complete-developers-guide) course.

## License
MIT © Krenbot
