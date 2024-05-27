import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Tooltip as ReactTooltip } from "react-tooltip";
import coinlogo from "../../assets/images/coins.svg";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const Navbar = () => {
  const { user, userLogout, googleLogin, coins } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user.email);
      const userProfile = {
        userName: res.user.displayName,
        userEmail: res.user.email,
        userPhoto: res.user.photoURL,
        userCoin: 50,
      };
      axios
        .post(
          `https://recipe-server-seven.vercel.app
/check?email=${res.user.email}`
        )
        .then((res) => {
          if (res.data.status) {
            axios.post(
              "https://recipe-server-seven.vercel.app/profile",
              userProfile
            );
          }
        });
      toast.success("successfully logged in");
      navigate(location.pathname ? location.pathname : "/");
    });
  };
  const handleLogout = (e) => {
    e.preventDefault();
    userLogout().then(toast.success("Logged Out"));
    navigate("/");
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/recipes"}>Recipes</NavLink>
      </li>
      <li>{user && <NavLink to={"/addRecipes"}>Add Recipe</NavLink>}</li>
      <li>
        {user && (
          <NavLink className="flex" to={"/coins"}>
            <img className="w-5 h-5" src={coinlogo} alt="" />
            Coins : {coins}
          </NavLink>
        )}
      </li>
    </>
  );

  const noUserNav = (
    <>
      <button
        onClick={handleLogin}
        className="btn btn-outline text-white font-semibold bg-red-500"
      >
        Sign in
      </button>
    </>
  );

  const userNav = (
    <>
      <div>
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div
              className="w-10 rounded-full"
              data-tooltip-id="my-tooltip-1"
              style={{ backgroundColor: "#999" }}
            >
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="font-bold">User : {user?.displayName}</a>
              <a onClick={handleLogout} className="font-bold text-red-600">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Toaster />
      <ReactTooltip id="my-tooltip-1" content={user?.displayName} />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-3xl font-black">
            Recipe<span className="text-red-500 -ml-2">Magic</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-md">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">{user ? userNav : noUserNav}</div>
      </div>
    </div>
  );
};

export default Navbar;
