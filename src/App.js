import Navbar from "./components/Navbar";
import RunnersWorkout from "./components/RunnersWorkout";
function App() {
  return (
    <div className="">
      <Navbar />
      <div className="px-16">
        <p className="font-light pt-12 pb-4 text-3xl">Runner's Workout</p>
        <div>
          <RunnersWorkout />
        </div>
      </div>
    </div>
  );
}

export default App;
