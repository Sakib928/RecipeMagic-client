import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddRecipe from "../Pages/AddRecipe/AddRecipe";
import Coins from "../Pages/Coins/Coins";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
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
        path: "/addRecipe",
        element: <AddRecipe></AddRecipe>,
      },
      {
        path: "/coins",
        element: <Coins></Coins>,
      },
    ],
  },
]);
