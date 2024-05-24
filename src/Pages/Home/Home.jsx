import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Home;
