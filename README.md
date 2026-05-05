# FreeAPI Meals UI

A React + TypeScript app that fetches and displays meal recipes from a public API.

## What it does

Fetches meal data from [FreeAPI](https://freeapi.app) on load and renders them as a responsive grid of recipe cards.

Each card shows: meal image, name, category, cuisine area, tags, instructions (truncated), ingredients list, and links to YouTube and source if available.

## Tech stack

- **React 19** with React Compiler enabled
- **TypeScript**
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling

## Project structure

```
src/
├── types.d.ts            # Meal and ApiRes type definitions
├── App.tsx               # Root component — fetches data, renders grid
├── components/
│   └── Meal.tsx          # MealCard component
└── main.tsx              # App entry point
```

## Getting started

```bash
npm install
npm run dev
```

## API

Data is fetched from:
```
GET https://api.freeapi.app/api/v1/public/meals
```

Response shape is typed via `ApiRes` and `Meal` in `src/types.d.ts`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
