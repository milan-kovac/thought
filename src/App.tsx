import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-7/12 mx-auto bg-[#f1f5f9] rounded-lg">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
