import useAuth from "../../hooks/useAuth";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const { recipes } = useAuth();
  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>;
      })}
    </div>
  );
};

export default Recipes;
