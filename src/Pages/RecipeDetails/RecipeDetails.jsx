import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const recipeId = useParams();
  console.log(recipeId);
  return (
    <div>
      <h1>hello this is recipe details</h1>
    </div>
  );
};

export default RecipeDetails;
