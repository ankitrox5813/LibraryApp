# LibraryApp Frontend

This is the frontend for the LibraryApp project. It provides a user interface for students and librarians to interact with the library system.

## Features
- User authentication (login/signup)
- Role-based dashboards (Student, Librarian)
- Book browsing and management
- Book issue and return workflows

## Tech Stack
- React.js (Create React App)
- Axios for API requests
- CSS for styling

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm

### Installation
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
```sh
npm start
```
The app will start on [http://localhost:3000](http://localhost:3000) by default.

## Folder Structure
- `src/screens/` - Main screens (Login, Signup, Home, Book, Book Issue, etc.)
- `src/components/` - Reusable UI components
- `src/apis/` - API request logic
- `src/utils/` - Utility functions (e.g., authentication helpers)

## Connecting to Backend
- The frontend expects the backend server to be running (see backend README).
- Update API base URLs in `src/apis/LibraryApplicationBackend.js` if needed.

## License
This project is for educational purposes.
