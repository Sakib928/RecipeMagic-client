import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";

const RecipeCard = ({ recipe }) => {
  const {
    _id,
    recipeName,
    recipePhoto,
    purchasedBy,
    creatorEmail,
    country,
    category,
  } = recipe;
  const { user, coins } = useAuth();
  //   console.log(user.email, creatorEmail, _id);
  const navigate = useNavigate();
  const handleViewDetails = () => {
    if (!user) {
      location.pathname = `/recipeDetails/${recipe._id}`;
      toast.error("Please Log In");
      return;
    }
    if (user.email === recipe.creatorEmail) {
      navigate(`/recipeDetails/${recipe._id}`);
      return;
    }
    if (coins < 10) {
      location.pathname = `/recipeDetails/${recipe._id}`;
      toast.error("not enough coin");
      navigate("/coins");
      return;
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "10 coins will be deducted from your balance",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(
              `https://recipe-server-seven.vercel.app
/purchase/${_id}?user=${user.email}&creator=${creatorEmail}`
            )
            .then((res) => {
              navigate(`/recipeDetails/${recipe._id}`);
              Swal.fire({
                title: "Done!",
                text: "You have purchased the recipy",
                icon: "success",
              });
              console.log(res.data);
            });
        }
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 w-[900px] mx-auto">
      <Toaster />
      <div className="hero-content flex-col lg:flex-row-reverse ">
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
