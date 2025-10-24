import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./MainLayout/Root";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Error404 from "./Pages/Error/Error404";
import AuthProvider from "./Auth/AuthProvider";
import AllSpot from "./Pages/AllSpot/AllSpot";
import AddSpot from "./Pages/AddSpot/Addspot";
import MyList from "./Pages/MyList/MyList";
import ProtectedRoute from "./Utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allSpot",
        element: <AllSpot></AllSpot>,
        loader: () =>
          fetch(
            "https://epic-escapes-server-hmq23n7jh-yeasirs-projects.vercel.app/addSpot"
          ),
      },
      {
        path: "/addSpot",
        element: (
          <ProtectedRoute>
            <AddSpot></AddSpot>
          </ProtectedRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <ProtectedRoute>
            <MyList></MyList>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
