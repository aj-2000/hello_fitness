import Navbar from "./components/Navbar";
import RunnersWorkout from "./components/RunnersWorkout";
function App() {
  return (
    <div className="">
      <Navbar />
      <div className="px-2 md:px-16 lg:px-24">
        <p className="font-light pt-12 pb-6 text-3xl">Runner's Workout</p>
        <div>
          <RunnersWorkout />
        </div>
      </div>
    </div>
  );
}

export default App;
