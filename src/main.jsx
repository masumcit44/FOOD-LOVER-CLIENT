import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layout/Main/Main.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Login from "./components/layout/Login/Login.jsx";
import Register from "./components/layout/Login/Register.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";
import ChefDetails from "./components/pages/ChefDetails/ChefDetails.jsx";
import Error from "./components/pages/ErrorPage/Error.jsx";
import PrivateRouter from "./components/routes/PrivateRouter.jsx";
import Blog from "./components/pages/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRouter>
            <ChefDetails></ChefDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/chef/${params.id}`),
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
