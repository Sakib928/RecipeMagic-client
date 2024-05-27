import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
const AddRecipes = () => {
  const { user } = useAuth();
  const creatorEmail = user.email;
  const {
    register,
    // formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleForm = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // await console.log(data);
    await axios
      .post(
        "https://api.imgbb.com/1/upload?key=922bdcf4d3928398611fbc31e3a8a28b",
        formData
      )
      .then((res) => {
        const recipePhoto = res.data.data.url;
        const recipe = {
          ...data,
          recipePhoto,
          creatorEmail,
          watchCount: 0,
          purchasedBy: [],
        };
        console.log(recipe);
        axios.post("https://recipe-server-seven.vercel.app
/addRecipes", recipe).then((res) => {
          if (res.data.insertedId) {
            toast.success("added recipe successfully");
          }
          reset();
        });
      });
  };

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <Toaster />
      <form
        onSubmit={handleSubmit(handleForm)}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-bold text-3xl ">
              Add <span className="text-red-500">Recipe</span>
            </p>
            <p className="text-sm">
              Share your amazing recipe with the rest of the world!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Recipe Name</span>
                </div>
                <input
                  {...register("recipeName", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Country</span>
                </div>
                <input
                  name="queryTitle"
                  {...register("country", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="form-control col-span-full sm:col-span-3">
              <div className="label">
                <span className="label-text font-bold">Category</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select w-full  input-bordered"
              >
                <option selected>Seafood</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>

            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Recipe Image</span>
                </div>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  placeholder="Type here"
                  className="file-input w-full max-w-xs "
                />
              </label>
            </div>
            <div className="col-span-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Video Link</span>
                </div>
                <input
                  {...register("video", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full ">
              <label htmlFor="bio" className="text-sm font-bold">
                Recipe Details
              </label>
              <textarea
                name="boycottReason"
                {...register("details", { required: true })}
                id="bio"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-red-500 input input-bordered h-[80px]"
              ></textarea>
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="btn btn-block  bg-red-500 border-none text-white hover:bg-red-400"
              >
                Add Query
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddRecipes;
