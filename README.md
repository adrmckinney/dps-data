This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

## Seed
- To seed the default tables (e.g., Level, Year, School, Grade, Discipline, Subject, SubGroup, SubGroupType) run: `npx prisma db seed`
- To seed the population tables (snapshot, subgroups, grades) with data from PDFs, run: `yarn run seed:population`

## Migrations
- To reset migrations, run: `npx prisma migrate reset`. This drops all tables and the DB and creates them again according to the already established migration files. This command will also automatically seed the DB with the default tables--but not the other tables.
- To create a new migration run: `npx prisma migrate dev --name name-of-migration`. This command will look for anything new in the `schema.prisma` file and create a migration file accordingly.