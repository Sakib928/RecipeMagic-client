import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { loading, user } = useAuth();
  if (loading) {
    return (
      <div className="flex min-h-screen min-w-screen justify-center">
        <span className="loading loading-spinner text-info loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    toast.error("Please Log In");
    return (
      <div>
        <Toaster></Toaster>
      </div>
    );
  }
};

export default PrivateRoute;
