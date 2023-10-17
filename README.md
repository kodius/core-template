# `core-template` Monorepo

Welcome to the `core-template` project, a monorepo housing multiple utilities and applications.

## 📂 Directory Structure

- **app**: Contains 2 Next.js projects.
  - `next_1`
  - `next_2`
- **packages**: This directory holds 4 packages that can be reused across projects.
  - `eslint-config-custom`: A reusable eslint configuration.
  - `tailwind-config`: Reusable Tailwind configuration with `shadcn`.
  - `tsconfig`: Reusable TypeScript configuration.
  - `ui`: Components library built using `shadcn` and the aforementioned `tailwind-config`.

## 📦 Packages

### `eslint-config-custom`

A pre-configured eslint setup that can be extended for consistent code quality checks.

### `tailwind-config`

This package provides a Tailwind configuration enhanced with `shadcn` customizations.

### `tsconfig`

A common TypeScript configuration for ensuring type safety and consistent compiler options.

### `ui`

A components library crafted with `shadcn`. It includes a global stylesheet `styles.css` which can be imported into any project.

## 🚀 Using the UI Library

To use the global styles from the `ui` library in any project inside the `app` directory (e.g., `next_1` or `next_2`):

```javascript
import "ui/styles.css";
```

Alternatively, if you want to use a custom global CSS file:

```javascript
import "./globals.css";
```
