# 6.2 - Todo App & Auth Frontend

This folder contains two main parts:

- **index.js / index.html**: Authentication frontend and backend (sign up, sign in, get user info)
- **boilerplate/**: A simple Todo List web app (HTML, CSS, JS) and a REST API backend for todos

## Features
- User authentication (sign up, sign in, JWT-based)
- View user info after login
- Todo List app (add/delete tasks)
- REST API for todos (`/api/todos`)

## Technologies Used
- Node.js
- Express
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (for JWT)
- [axios](https://www.npmjs.com/package/axios) (frontend HTTP requests)
- HTML, CSS, JavaScript (frontend)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cors](https://www.npmjs.com/package/cors)

## How to Run
1. Install dependencies:
   ```sh
   cd 6.2/boilerplate
   npm install
   ```
2. Start the backend server:
   ```sh
   node server.js
   ```
3. Open `index.html` in your browser for the frontend.

---
