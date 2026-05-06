# FreeAPI Random Cat

A React + TypeScript app that fetches and displays a random cat breed from a public API.

## What it does

Fetches a random cat breed from [FreeAPI](https://freeapi.app) on load and renders a detailed breed card with visual trait ratings.

The card shows: breed image, name, origin, life span, weight, description, temperament tags, trait rating bars (adaptability, affection, energy, etc.), and links to Wikipedia and CFA.

## Tech stack

- **React 19** with React Compiler enabled
- **TypeScript**
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling

## Project structure

```
src/
├── types.d.ts            # CatBreed and ApiRes type definitions
├── App.tsx               # Root component — fetches data, renders card
├── components/
│   └── Cat.tsx           # CatCard component
└── main.tsx              # App entry point
```

## Getting started

```bash
pnpm install
pnpm run dev
```

## API

Data is fetched from:
```
GET https://api.freeapi.app/api/v1/public/cats/cat/random
```

Response shape is typed via `ApiRes` and `CatBreed` in `src/types.d.ts`.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start dev server |
| `pnpm run build` | Production build |
| `pnpm run preview` | Preview production build |
| `pnpm run lint` | Run ESLint |
