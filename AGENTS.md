# Architecture & Project Guidelines

- E-TAILED is a frontend-only React + Vite Single Page Application (SPA) using `react-router-dom`.
- Pages are organized in `src/pages/` (`/`, `/services`, `/about`, `/partner`, `/careers`, `/faq`, `/contact`, and policy pages), reusing section components from `src/components/etailed`.
- Internal navigation uses `<Link>` and `<NavLink>` from `react-router-dom`.
- All styles leverage Tailwind CSS v4 with design tokens defined in `src/styles.css`.
