# LibraryApp Backend

This is the backend for the LibraryApp project. It provides RESTful APIs for managing books, users, and book issues in a library system.

## Features
- User authentication (JWT-based)
- Role-based access (Student, Librarian)
- Book management (CRUD)
- Book issue/return management

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm
- MongoDB instance (local or cloud)

### Installation
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Configuration
- Update MongoDB connection string in `src/appmongoose.js` if needed.
- JWT secret and other sensitive configs should be set as environment variables or in a config file (not included by default).

### Running the Server
```sh
npm start
```
The server will start on the default port (e.g., 5000). You can change the port in `src/app.js` if needed.

## API Endpoints
- `/api/users` - User registration, login, and management
- `/api/books` - Book CRUD operations
- `/api/book-issues` - Book issue and return operations

## Folder Structure
- `src/models/` - Mongoose models
- `src/controllers/` - Route controllers
- `src/routes/` - API route definitions
- `src/services/` - Business logic
- `src/middleware/` - Authentication and authorization middleware

## License
This project is for educational purposes. 