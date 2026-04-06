# ✅ React Todo App

A clean, fully-featured Todo application built with **React 18**, **TypeScript**, and **Vite**. Todos persist across page refreshes via `localStorage` — no backend required.

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Features

- **Add todos** — type and press `Enter` to add
- **Complete todos** — click the circular checkbox to toggle
- **Delete todos** — hover over an item and click `×`
- **Inline editing** — double-click any todo to edit; `Enter` to save, `Escape` to cancel
- **Toggle all** — mark every todo done/undone with the `❯` button
- **Filters** — view All, Active, or Completed todos
- **Clear completed** — remove all finished todos in one click
- **Item counter** — shows how many items are left
- **LocalStorage persistence** — todos survive page refresh
- **Responsive design** — works on mobile and desktop

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.2 | UI framework |
| TypeScript | 5.2 | Type safety |
| Vite | 5.0 | Build tool & dev server |
| localStorage | Browser API | Data persistence |

---

## Project Structure

```
todo-app/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── main.tsx                  # App entry point
    ├── App.tsx                   # Root component
    ├── App.css                   # Component styles
    ├── index.css                 # Global styles & CSS variables
    ├── types/
    │   └── todo.ts               # Todo & FilterType interfaces
    ├── hooks/
    │   └── useTodos.ts           # All state logic + localStorage
    └── components/
        ├── TodoForm.tsx          # Input field + toggle-all button
        ├── TodoItem.tsx          # Single todo with inline editing
        ├── TodoList.tsx          # Filtered list + empty state
        └── TodoFooter.tsx        # Item count + filters + clear
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Jaiprathap26/react-todo-app.git

# Navigate into the project
cd react-todo-app

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Output is in the `dist/` folder — ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

---

## How It Works

### State Management

All todo state lives in the `useTodos` custom hook (`src/hooks/useTodos.ts`). It uses:

- `useState` — reactive todo list and active filter
- `useEffect` — syncs todos to `localStorage` on every change
- `useCallback` — memoized action handlers to prevent unnecessary re-renders

### Data Flow

```
App
 ├── useTodos (hook) ──── localStorage
 ├── TodoForm  ──────────── onAdd, onToggleAll
 ├── TodoList  ──────────── filtered todos
 │    └── TodoItem ──────── onToggle, onDelete, onEdit
 └── TodoFooter ─────────── filter state, onClearCompleted
```

### Inline Editing

Double-click any todo label to enter edit mode. The input auto-focuses and selects the text. Changes commit on `Enter` or blur; `Escape` reverts.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Add new todo / Save edit |
| `Escape` | Cancel inline edit |
| Double-click | Enter edit mode on a todo |

---

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## License

MIT — free to use and modify.

