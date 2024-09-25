import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/singIn/SignIn";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import App from "../App";
import SignUp from "../Pages/Auth/signUp/SignUp";
import ShoppingCart from "../Pages/Cart/Cart";
import Product from "../Pages/Product/Product";
import Notifuication from "../Pages/Motification/notifuication";
import Analytic from "../Component/Analytic/Analytic";
import Inventory from "../Component/Inventory/Inventory";

export const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <ProtectedRoute />, // Protect this route
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/cart",
            element: <ShoppingCart />,
          },
          {
            path: "/product",
            element: <Product />,
          },
          {
            path: "/notification",
            element: <Notifuication />,
          },
          {
            path: "/analytic",
            element: <Analytic />,
          },
          {
            path: "/inventory",
            element: <Inventory />,
          },
        ],
      },
    ],
  },
]);
