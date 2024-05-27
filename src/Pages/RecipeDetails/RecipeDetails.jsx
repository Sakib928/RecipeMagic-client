import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const recipeId = useParams();
  const [recipe, setRecipe] = useState(null);
  console.log(recipe);
  useEffect(() => {
    axios.get(`http://localhost:5000/recipe/${recipeId.id}`).then((res) => {
      //   console.log(res.data);
      setRecipe(res.data);
    });
  }, [recipeId.id]);
  return (
    <div>
      <section className="text-center">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-around  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={recipe?.recipePhoto}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {recipe?.recipeName}
            </h1>
            <p className="mt-6 mb-2 text-lg">{recipe?.details}</p>
            <p className="mb-2 text-lg"> country : {recipe?.country}</p>
            <p className="mb-2 text-lg">category : {recipe?.category}</p>
            <p className="mb-2 text-lg">WatchCount : {recipe?.watchCount}</p>
          </div>
        </div>
        <iframe
          width="420"
          height="315"
          src={recipe?.newVideo}
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};

export default RecipeDetails;
