import "./styles/global.css";
import "./App.css";
import Habit from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={30} />
    </div>
  );
}

export default App;
