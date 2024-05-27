import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [coins, setCoins] = useState(0);

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      // console.log(currentUser);
      setUser(currentUser);
      const userMail = user?.email;
      const loggedUser = { email: userMail };
      if (user) {
        axios.post(`http://localhost:5000/jwt`, loggedUser, {
          withCredentials: true,
        });
        setUser(user);
        setLoading(false);
      } else {
        axios.post(`http://localhost:5000/logout`, loggedUser, {
          withCredentials: true,
        });
      }
    });
    return () => unsubscribe;
  }, [reload, user]);

  useEffect(() => {
    axios.get("http://localhost:5000/recipes").then((res) => {
      console.log(res.data);
      setRecipes(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/coins?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setCoins(res.data.userCoin);
      });
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    googleLogin,
    reload,
    setReload,
    userLogout,
    recipes,
    setRecipes,
    coins,
    setCoins,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
