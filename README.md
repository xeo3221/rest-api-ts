# REST API

A robust REST API built with Express.js, Mongoose, and TypeScript, designed to handle user authentication, authorization, and CRUD operations. The API features secure user authentication, middleware for request validation, and comprehensive error handling. It integrates with MongoDB for data storage and uses environment variables for configuration. Designed for scalability and ease of use, this API provides a solid foundation for managing user data and interactions efficiently.

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#-tech-stack">Tech Stack</a>
    </li>
    <li>
      <a href="#-features">Features</a>
    </li>
    <li>
      <a href="#-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#-key-components">Key Components</a></li>
    <li><a href="#-middleware">Middleware</a></li>
    <li><a href="#-database-schema">Database Schema</a></li>
    <li><a href="#-future-improvements">Future Improvements</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## 🚀 Tech Stack

- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose)

## 🛠 Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repository**

```sh
git clone https://github.com/xeo3221/rest-api-ts.git
cd rest-api-ts
```

2. **Install dependencies**

```sh
npm install
```

3. **Set up environment variables**

```sh
cp .env.example .env
```

Fill in the required environment variables:

- MONGO_URL

4. **Start the development server**

```sh
npm run dev
```

## 🌟 Features

- **Authentication & Authorization**

  - Secure user authentication
  - Protected routes and API endpoints

- **User Management**

  - Create, update, and delete users
  - Fetch user details

- **Error Handling**

  - Centralized error handling middleware
  - Custom error messages and status codes

## 📦 Key Components

- `authentication.controller.ts`: Handles user authentication
- `users.controller.ts`: Manages user-related operations
- `users.db.ts`: Database operations for users
- `middlewares.ts`: Middleware for authentication and authorization

## 🛡️ Middleware

- `isAuthenticated`: Middleware to verify user authentication
- `isOwner`: Middleware to verify user ownership of resources

## 📝 Database Schema

The application uses a MongoDB database with the following main collections:

- `users`: User profiles

## 🔮 Future Improvements

- **Enhanced Security Features**

  - Implement JWT for token-based authentication
  - Add rate limiting to prevent abuse

- **Advanced User Management**

  - Role-based access control
  - User activity logging

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)
