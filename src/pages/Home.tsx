import Rating from "../components/Rating";
import AddThought from "../components/AddThought";
import Profile from "../components/Joke";
import Joke from "../components/Joke";
import Thoughts from "../components/Thoughts";

const Home = () => {
  return (
    <div className="grid  gap-4 p-4 grid-cols-1 divide-y  md:grid-cols-3 md:divide-x divide-transparent">
      <Joke />
      <div>
        <AddThought />
        <Thoughts />
      </div>
      <Rating />
    </div>
  );
};

export default Home;
