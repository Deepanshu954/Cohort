# 🟢 Express & JavaScript Practice (Folder 5)

This folder contains several small projects and code samples to practice core JavaScript concepts and Express.js fundamentals, including CORS, REST APIs, and middleware.

---

## 📂 Structure

- `5.4.js` — JavaScript practice: map, filter, arrow functions
- `cors/` — Express server with CORS and a simple sum API
  - `index.js` — Express + CORS backend
  - `public/index.html` — Frontend to test the sum API
- `Express Test/` — Express.js API and middleware demos
  - `index1.1.html` — Fetch API test (JSONPlaceholder)
  - `index1.2.html` — Axios API test (JSONPlaceholder)
  - `index1.3.js` — Express server with sum, subtract, multiply, divide endpoints
  - `middleware.js` — Express middleware example (age check)

---

## 🧠 What I Learned

- How to use JavaScript array methods: `map`, `filter`, and arrow functions
- Setting up a basic Express.js server
- Using CORS middleware to enable cross-origin requests
- Creating REST API endpoints (GET, POST)
- Handling different types of request data: query params, route params, headers, and body
- Writing and using Express middleware for custom logic (e.g., age validation)
- Connecting a simple HTML frontend to a backend API using Axios
- Practicing API calls with Fetch and Axios to public APIs (JSONPlaceholder)

---

## 🛠️ Technologies Used

- JavaScript (ES6+)
- Node.js
- Express.js
- CORS
- Axios (frontend)
- HTML5

---

## 🚀 How to Run

1. Install dependencies (if any):
   ```sh
   npm install
   ```
2. Start the server (for each Express project):
   ```sh
   node cors/index.js
   # or
   node "Express Test"/index1.3.js
   ```
3. Open the HTML files in your browser to test frontend-backend integration.

---

