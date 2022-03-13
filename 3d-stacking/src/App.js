import Home from "./containers/Home";
import DarkMode from "./components/DarkMode";
import "./index.css";
function App() {
  return (
    <div className="App">
      <DarkMode />
      <Home />
    </div>
  );
}

export default App;
