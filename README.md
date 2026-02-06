# React + TypeScript + Vite

## Live Demo
🔗 https://tahwul-kvwwut17o-ammaryasirs-projects.vercel.app

#### 📊 Compliance Dashboard UI — Frontend Implementation
#### Overview

This project is a frontend implementation of a compliance and digital transformation dashboard based on the provided Figma designs. It focuses on translating UI/UX mockups into clean, reusable, and responsive React components while maintaining strong code structure and visual consistency.

The implementation emphasizes component composition, layout reuse, semantic styling, and maintainable architecture rather than backend integration. All data is mocked locally.

### 🧱 Tech Stack

- React (Functional Components + Hooks)

- Vite

- TypeScript

- Tailwind CSS

- React Router v6 (nested layout routing)

- Chart library: Recharts


Pages render inside the layout using React Router nested routes + <Outlet />. This keeps layout concerns separate from page logic and avoids duplication.

### 🎨 Styling Strategy
#### Tailwind + Design Tokens

The UI uses semantic theme tokens mapped through Tailwind:

- primary
- background
- surface
- muted
- success / warning / danger

This avoids hard-coded color values and keeps styling consistent and maintainable.

##### Example:
- bg-surface
- text-muted
- border-success

### 🧩 Component Strategy

Components are split into:

- Layout components — Sidebar, Header, Layout shell

- UI primitives — Card, Badge, Progress, Tabs

- Page sections

Reusable pieces were extracted only when repetition appeared, avoiding premature abstraction.

### 📦 Data Handling

- No backend required as per task instructions

- Static mocked data used

- Data structures typed with TypeScript interfaces

- Components designed so real API data can be plugged in easily

## 🚀 Getting Started

#### Install dependencies
```bash
npm install
```
#### Run:
```bash
npm run dev
```
#### Run Locally
[http://localhost:5173/](http://localhost:5173/)
#### Build:
```bash
npm run build
```

### 🔍 What I Focused On
- Clean layout composition

- Reusable UI primitives

- Visual spacing & alignment accuracy

- Semantic styling instead of hard-coded values

- Readable project structure

- Predictable routing setup

- Type-safe component props

#### Assumptions Made

The design included a secondary screen with tab navigation, but the navigation flow between screens was not fully specified in the mockups.

To keep the UX consistent and navigable, I connected this screen through the Perspectives item ("/perspectives") in the sidebar.

#### What could be improved with more time
Overall responsiveness especially on project timeline chart. I still feel that there is a room for improvement but I am ending here due to deadline

#### 📝 Notes
SSR was intentionally not used since this is an authenticated dashboard-style UI with mocked data and no SEO requirement.