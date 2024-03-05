import Rating from "../components/Rating";
import AddThought from "../components/AddThought";
import Profile from "../components/Joke";
import Joke from "../components/Joke";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 justify-between sm:space-x-3 ">
      <Joke />
      <AddThought />
      <Rating />
    </div>
  );
};

export default Home;
