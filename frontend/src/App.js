import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import BookForm from "./screens/BookForm";
import BookScreen from "./screens/BookScreen";
import BookIssueForm from "./screens/BookIssueForm";
import BookIssueScreen from "./screens/BookIssueScreen";

const router = createBrowserRouter([
  {path: "/login", element: <LoginScreen />},
  {path: "/signup", element: <SignUpScreen />},
  {path: "/", element: <HomeScreen />},
  {path: "/add-book", element: <BookForm />},
  {path: "/books", element: <BookScreen />},
  {path: "/book-issue", element: <BookIssueForm />},
  {path: "/book-issue-list", element: <BookIssueScreen />},
  
  
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
