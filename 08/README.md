## 🚀 Course Selling Backend Server

This is a pure backend server for a course selling platform. It provides RESTful APIs for user authentication, course management, and admin functionalities. The backend is built with Node.js and Express, using a modular structure for scalability and maintainability.

---

## ✨ Features

- 🧑‍💻 User Authentication (JWT-based)
- 🛡️ Admin Authentication
- 📚 Course Management (Create, Update, Delete, List)
- 🛒 Course Purchase & Enrollment
- 👤 User Profile & Purchased Courses
- 🔒 Secure API Endpoints
- 📦 Modular Code Structure

---

## 🗂️ Project Structure

```
8 Course Selling/
│── config.js                # Configuration (e.g., JWT secret)
│── index.js                 # Entry point (Express app)
│── package.json             # Dependencies & scripts
│── README.md                # Project documentation
│
├── database/
│   └── db.js                # Database connection & models
│
├── middleware/
│   ├── admin_auth.js        # Admin authentication middleware
│   └── user_auth.js         # User authentication middleware
│
└── route/
    ├── admin.js             # Admin routes (course CRUD)
    ├── course.js            # Public/user course routes
    └── user.js              # User routes (profile, purchase)
```

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JWT (jsonwebtoken)
- (Optional) MongoDB or in-memory storage

---

## 📦 Installation & Running

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```

---

## Create a course selling app

✅ - Initialize a new Node.js project
✅ - Add Express, jsonwebtoken, mongoose to it as a dependency 
✅ - Create index.js
✅ - Add route skeleton for user login, signup, purchase a course, sees all courses, sees the purchased courses course
✅ - Add routes for admin login, admin signup, create a course, delete a course, add course content.
✅ - Define the schema for User, Admin, Course, Purchase
✅ - Add a database (mongodb), use dotenv to store the database connection string
✅ - Add middlewares for user and admin auth
✅ - Complete the routes for user login, signup, purchase a course, see course (Extra points - Use express routing to better structure your routes)
 - Create the frontend


 Good to haves
  - Use cookies instead of JWT for auth
  - Add a rate limiting middleware
  - Frontend in ejs (low pri)
  - Frontend in React
