import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Coins = () => {
  const { user } = useAuth();
  const handleBuyCoin = (amount) => {
    axios
      .patch(
        `https://recipe-server-seven.vercel.app
/buy?email=${user.email}&money=${amount}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Pricing Plan
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg">
            <p className="font-medium text-gray-500 uppercase">Freedark</p>

            <h2 className="text-4xl font-semibold text-gray-800 uppercase ">
              $1
            </h2>

            <p className="font-medium text-gray-500 ">100 coins</p>

            <button
              onClick={() => handleBuyCoin(1)}
              className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Start Now
            </button>
          </div>

          <div className="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
            <p className="font-medium text-gray-200 uppercase">Premium</p>

            <h2 className="text-5xl font-bold text-white uppercase 00">$5</h2>

            <p className="font-medium text-gray-200">500 coins</p>

            <button
              onClick={() => handleBuyCoin(5)}
              className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
            >
              Start Now
            </button>
          </div>

          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg ">
            <p className="font-medium text-gray-500 uppercase ">Enterprise</p>

            <h2 className="text-4xl font-semibold text-gray-800 uppercase ">
              $10
            </h2>

            <p className="font-medium text-gray-500 d">1000 coins</p>

            <button
              onClick={() => handleBuyCoin(10)}
              className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
