# 🟣 React Router & JSX Practice (App.jsx)

This project is a **React + React Router v6** practice file focused on layout structuring, nested routing, and basic hook usage — all written in a **single `App.jsx` file** for clarity and hands-on experimentation.

---

## 📂 Structure

- `App.jsx` — Contains the entire app logic:
  - React Router setup (`BrowserRouter`, `Routes`, `Route`)
  - Common layout with shared `Navbar` and `Footer`
  - Four pages: `Landing`, `Class11`, `Class12`, `Login`
  - A basic login form using `useRef()` and `useNavigate()`
  - Custom 404 page with wildcard route (`*`)

> No additional files or folders — everything lives inside one component file for simplicity and practice purposes.

---

## 🧠 What I Practiced

- Using **React Router v6** with nested routes
- Structuring a **shared layout** using `<Outlet />`
- Navigating programmatically with `useNavigate()`
- Handling references using `useRef()` for input focus
- Writing modular JSX inside a flat architecture
- Styling components using **inline styles**

---

## 🛠️ Technologies Used

- React (JSX)
- React Router DOM (v6)
- JavaScript (ES6+)
- Inline CSS styling
- No external packages or CSS files

---

## 🚀 How to Run

1. Make sure `react-router-dom` is installed:
   ```sh
   npm install react-router-dom