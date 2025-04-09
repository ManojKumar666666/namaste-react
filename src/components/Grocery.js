import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <h1>
        This is a component having lot of child components so require another
        bundle to load when we click on grocery so using Lazy Loading
      </h1>
      <h2>user:{loggedInUser}</h2>
    </>
  );
};

export default Grocery;
