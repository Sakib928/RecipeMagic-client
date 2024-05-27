import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import AddRecipes from "../Pages/AddRecipes/AddRecipes";
import Coins from "../Pages/Coins/Coins";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoutes";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/addRecipes",
        element: (
          <PrivateRoute>
            <AddRecipes></AddRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/coins",
        element: (
          <PrivateRoute>
            <Coins></Coins>
          </PrivateRoute>
        ),
      },
      {
        path: "/recipeDetails/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
