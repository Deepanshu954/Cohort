# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Recoil – Global State Management Demo

This project is a standalone demo of using Recoil for global state management in React. It features a counter with atom and selector, and demonstrates efficient rendering with memoized components.

## ✨ Features

- Recoil state management (`atom`, `selector`)
- Counter with even/odd derived state
- Memoized components for efficient rendering
- Clean, modular code structure

## 🚀 How to Run

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open your browser to the provided local URL.

---

Explore the code to learn how to use Recoil for scalable, efficient state management in React applications.

# Week 11 – Recoil State Management in React

This folder demonstrates the use of Recoil for state management in React applications. Recoil provides a simple and flexible way to manage global state, selectors, and derived data, making it easier to build scalable React apps.

## 🧠 What I Learned

- Using Recoil atoms for global state
- Creating selectors for derived/computed state
- Integrating Recoil with React components
- Advantages of Recoil over prop drilling and Context API for complex state

## Features

- Global counter state using Recoil atom
- Selector to compute if the counter is even
- Simple, reactive UI updates based on state changes

## 🛠️ Technologies Used

- React 19+
- Recoil
- Vite
- JavaScript (ES6+)

## Notes

- Recoil makes global state management in React more intuitive and less verbose than Context API for many use cases.
- Selectors allow for efficient derived state without unnecessary re-renders.
- This folder is a practical introduction to Recoil's core concepts.
