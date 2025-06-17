# 10 React

This folder contains React practice projects, each in its own subfolder. Each project demonstrates different concepts and patterns in React, including React Router, Context API, prop drilling, and more. All projects use Vite for fast development and modern tooling.

## Subfolders

### 10.1
- **Description:** Practice project focused on React Router v6, layout structuring, nested routing, and basic hook usage. All logic is contained in a single `App.jsx` file for clarity and hands-on experimentation.
- **Key Features:**
  - React Router v6 setup with nested routes
  - Shared layout using `<Outlet />`
  - Programmatic navigation with `useNavigate()`
  - Input focus management with `useRef()`
  - Custom 404 page
  - Inline CSS styling
- **How to Run:**
  1. Install dependencies: `npm install`
  2. Start the dev server: `npm run dev`

### 10.2
- **Description:** Practice project comparing prop drilling and the Context API for state management in React. Includes both approaches in the same file for learning purposes.
- **Key Features:**
  - Demonstrates prop drilling vs. Context API
  - Uses `useState`, `createContext`, and `useContext`
  - Components: `BulbProvider`, `LightBulb`, `BulbState`, `Toggle`
  - Conditional rendering and state sharing
- **How to Run:**
  1. Install dependencies: `npm install`
  2. Start the dev server: `npm run dev`

---

Each subfolder contains its own `README.md` with more details about the specific project, setup instructions, and learning objectives.
