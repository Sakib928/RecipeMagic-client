import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
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
