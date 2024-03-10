import { useQuery } from "react-query";
import Spinner from "./Spinner";

const fetchJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: Unable to fetch joke from API`);
  }

  const jokeData = await response.json();
  return jokeData.joke;
};

const Joke = () => {
  const { data: joke, isError, isLoading } = useQuery("joke", fetchJoke);
  return (
    <div className="bg-white p-2 h-fit rounded-lg flex justify-center items-center">
      {isLoading ? <Spinner /> : <h1 className="break-words">{isError ? "Please try later." : joke}</h1>}
    </div>
  );
};

export default Joke;
