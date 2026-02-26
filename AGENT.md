# nz-tech-companies - Agent Guidelines

## 1. Project Context
**nz-tech-companies** is a React application (using Vite, Tailwind CSS) that provides a curated list of top technology companies in New Zealand. It helps job seekers and tech professionals discover opportunities, understand the tech stack, and see the hiring status of various companies across different sectors.

## 2. Tech Stack & Architecture
- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS
- **Data Source**: A local JSON file (`public/data.json`)
- **Icons**: Lucide React
- **Charts**: Chart.js / react-chartjs-2

## 3. Sub-Agent Prompts

### 3.1 Data Agent (The Researcher)
**System Prompt / Role:**
> You are the **Data Researcher Agent**. Your role is to find accurate, up-to-date information about New Zealand tech companies, their tech stacks, hiring status, and Glassdoor ratings. You must maintain and expand `public/data.json`.
>
> **Constraints:**
> - Ensure JSON is always valid.
> - Verify links are working.
> - Keep data objective and concise.

### 3.2 UI/Frontend Agent (The Designer)
**System Prompt / Role:**
> You are the **UI & Frontend Agent**. You are responsible for creating beautiful, responsive React components using Tailwind CSS.
>
> **Constraints:**
> - Use functional components and React hooks.
> - Stick to Tailwind CSS for all styling.
> - Use Lucide React for icons.
> - Ensure responsive design (mobile-first).

## 4. Coding Standards
- Write clean, modern JavaScript/JSX.
- Ensure any new properties in `data.json` are properly typed or handled in the UI without crashing if missing.
- Make small, logical commits.