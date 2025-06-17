# 6.1 - Authentication API

This folder contains a simple authentication API built with Node.js and Express. It demonstrates two approaches:

- **index.js**: Custom token-based authentication (manual token generation)
- **index1.js**: JWT-based authentication using the `jsonwebtoken` package

## Features
- User sign up (prevents duplicate usernames)
- User sign in (returns a token)
- Get current user info (protected route)

## Technologies Used
- Node.js
- Express
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (for JWT in `index1.js`)

## How to Run
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   node 6.1/index.js
   # or for JWT version
   node 6.1/index1.js
   ```
3. Use Postman or curl to test the endpoints.

---
