import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const RecipeCard = ({ recipe }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (!user) {
      location.pathname = `/recipeDetails/${recipe._id}`;
      toast.error("Please Log In");
    }
    if (user.email === recipe.creatorEmail) {
      navigate(`/recipeDetails/${recipe._id}`);
    }
  };
  const {
    recipeName,
    recipePhoto,
    purchasedBy,
    creatorEmail,
    country,
    category,
  } = recipe;
  return (
    <div className="hero min-h-screen bg-base-200">
      <Toaster />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={recipePhoto} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <p className="text-lg font-medium text-red-500">{category} Recipes</p>
          <h1 className="text-5xl font-bold">{recipeName}</h1>
          <p className="mt-6">purchased by : {purchasedBy}</p>
          <p>Creator Email : {creatorEmail}</p>
          <p>Country : {country}</p>
          <button onClick={handleViewDetails} className="btn btn-primary mt-8">
            View The Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
