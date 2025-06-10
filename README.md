# Kirill Maltsev | Portfolio

#### Video Demo: https://www.youtube.com/watch?v=cvsEJNaOi08

#### Description:
Kirill Maltsev | Portfolio is a modern and minimalist web application developed as my final project for Harvard's CS50x. Its primary mission is to serve as an elegant and functional digital business card, effectively showcasing who I am, what I do, and the work I'm passionate about. In a world where a first impression is often a digital one, this site solves the fundamental need for a high-quality, professional online presence, which is an essential component of any modern resume.

---

## About The Project

The journey through CS50 has been a long and fascinating one, and this project is its logical culmination. From the beginning, I knew I wanted to create something practical—something that would live on and evolve even after the course was complete. The idea of building a personal portfolio website felt perfect. It's not just a course assignment; it's a real-world tool that I can use in my professional life starting today.

This project was conceived as an answer to a simple question: what should a developer's website look like in 2025? For me, the answer is a combination of minimalism, speed, and meticulous attention to detail. I wanted to move away from overloaded, information-heavy pages and create a clean, focused space where every element has a purpose. This site is my attempt to realize that philosophy using a powerful and modern tech stack. In the future, I plan to actively expand it by adding new projects and perhaps a blog section, turning it into a complete hub for my digital identity.

## Key Features

Despite its minimalist appearance, the project incorporates several key features designed to enhance the user experience:

* **Single-Page Architecture:** All essential information—about me, my current work, and my contact links—is presented on a single, streamlined page. This design choice was deliberate, aimed at providing a fast, seamless experience for the user, eliminating unnecessary clicks and getting straight to the point.

* **Subtle & Smooth Animations:** Interactive elements, such as the social media icons, feature smooth, non-intrusive hover animations. These micro-interactions, built with **Tailwind CSS**, add a touch of personality and professional polish to the user interface without being distracting.

* **Advanced Theme Toggling (Light/Dark/System):** The application includes a fully functional theme switcher. Users can choose between a light theme, a dark theme, or have the site automatically sync with their system's preference. This choice is persisted in the browser's `localStorage`, ensuring the user's preference is remembered on subsequent visits.

## Tech Stack

This project was built using a modern and powerful combination of technologies:

* **Framework:** [Next.js](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment:** [Vercel](https://vercel.com/)

## File-by-File Breakdown

To provide a clear understanding of the project's structure and logic, here is a breakdown of the key files and components I wrote.

### `/app/layout.tsx`
* **Purpose:** This is the root layout of the application, as per the Next.js App Router convention. It wraps all page content and defines the main `<html>` and `<body>` structure.
* **Implementation:** In this file, I import and apply the global stylesheet (`globals.css`) and configure the primary font ('Inter') using `next/font/google`. Its most critical role is to instantiate the `ThemeProvider`, which wraps all `children` components. This ensures that the theme-switching context is available to every single part of the application, making global styling consistent and manageable.

### `/app/page.tsx`
* **Purpose:** This file represents the main page component that users see when they visit the root URL. It contains all the primary JSX markup and content for the portfolio.
* **Implementation:** The component is structured as a series of semantic sections, built using components from `shadcn/ui`. For instance, the main content blocks use the `<Card>` component, while contact links are presented in a `<DropdownMenu>`. The entire layout is orchestrated with Tailwind CSS's Flexbox and Grid utilities to ensure it is fully responsive across all screen sizes.

### `/components/providers/theme-provider.tsx`
* **Purpose:** This is a client-side wrapper component for the `next-themes` library. It cleanly abstracts all the logic related to providing, managing, and updating the application's theme.
* **Implementation:** Following the best practices recommended by the `next-themes` documentation, this component imports the `ThemeProvider` from the library and passes through all its props and children. This architectural choice promotes a clean separation of concerns, keeping the root `layout.tsx` file tidy and free of third-party implementation details.

### `/components/mode-toggle.tsx`
* **Purpose:** This component is the user-facing UI for switching the theme. It renders the button and dropdown menu that the user interacts with.
* **Implementation:** It leverages the `useTheme` hook from `next-themes` to access the current theme and the `setTheme` function. The component's UI is built with the `<Button>` and `<DropdownMenu>` components from `shadcn/ui`. Each `DropdownMenuItem` is configured to call `setTheme()` with the corresponding value ('light', 'dark', or 'system'), providing an intuitive and accessible way for users to control their viewing experience.

## Architecture & Design Decisions

During development, I faced several key decisions that shaped the final project.

#### 1. The Framework Debate
The first major architectural crossroad was choosing the right framework. I considered several options: a classic React setup with Vite, known for its rapid development server, or even a content-focused framework like Astro. However, I ultimately chose **Next.js**. It offered the best of all worlds: unparalleled performance for a static site thanks to Static Site Generation (SSG), but also the flexibility to add server-side logic in the future (for a blog, for instance) without a complete rewrite. Features like built-in Image Optimization and a file-based router were significant advantages that accelerated development.

#### 2. The UI Library Dilemma
For the user interface, I debated between component-heavy libraries like **Material-UI** and **Mantine**, and the unique philosophy of **shadcn/ui**. While traditional libraries are great, they often come with opinionated styles that can be hard to override to achieve a truly minimalist design. I chose **shadcn/ui** because it operates on a different principle: you don't install it as a dependency. Instead, you copy its component code directly into your project. This gave me full ownership and control over every line of code and styling, which was crucial for achieving the clean, bespoke aesthetic I envisioned. It allowed for rapid development without sacrificing customizability.

## Key Challenges & Solutions

The most significant challenge was not technical but rather design-oriented: translating the idea of "minimalism" into a functional and visually appealing UI. My initial attempts using plain Tailwind CSS resulted in a design that felt functional but lacked a professional polish. The spacing felt inconsistent, and the components didn't feel cohesive.

This "blank page paralysis" was a frustrating hurdle. The turning point was discovering and committing to the **shadcn/ui** design system. It wasn't just a set of components; it was a philosophy. By providing well-designed, composable primitives like `<Card>` (with its `<CardHeader>`, `<CardContent>`, etc.), it forced me to think more structurally about my content. This not only solved my design problem but also resulted in cleaner, more semantic, and more maintainable React code. It was a valuable lesson in the importance of good design systems.

## Getting Started

To run a local copy of this project, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/djessicatony/my-portfolio.git
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Run the development server:**
    ```sh
    npm run dev
    ```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---
Thank you for taking the time to review my project!
