# 💡 React Bulb Toggle App — Prop Drilling vs Context API

This is a React practice project that explores two common patterns for managing state across components:

1. **Prop Drilling** – where state is passed manually through multiple layers (commented out version)
2. **Context API** – a cleaner and more scalable solution for global state sharing (active version)

Both versions were implemented purely for practice and learning purposes, and are included in the same file for comparison.

---

## 🔧 Components

- **App** – Entry point, wraps the app with `BulbProvider`
- **BulbProvider** – Context provider using `createContext` and `useContext`
- **LightBulb** – Parent component that holds `BulbState` and `Toggle`
- **BulbState** – Displays a bulb image based on current state
- **Toggle** – A button that toggles the bulb state on click

---

## 🌐 What It Does

- Clicking "Toggle" changes the bulb from on to off and vice versa
- Displays different bulb images for each state
- Demonstrates clean state sharing using React Context API

---

## 💬 What I Practiced

- `useState` for local state
- `createContext` and `useContext` for global state sharing
- Avoiding prop drilling
- Structuring components for clarity
- Conditional rendering using ternary operators

---

## 🧠 Key Concepts

- **Prop Drilling** – passing state through every child component manually
- **Context API** – allows sharing state across components without props
- **React Hooks** – used for state (`useState`) and context (`useContext`)

---
