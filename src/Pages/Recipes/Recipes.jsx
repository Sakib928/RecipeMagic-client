import { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const Recipes = () => {
  // const { recipes } = useAuth();
  const [showRecipes, setShowRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://recipe-server-seven.vercel.app
/showRecipes").then((res) => {
      console.log(res.data);
      setShowRecipes(res.data);
    });
  }, []);
  return (
    <div>
      {showRecipes.map((recipe) => {
        return <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>;
      })}
    </div>
  );
};

export default Recipes;
