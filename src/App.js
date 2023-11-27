import "./App.css";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import MineToMill from "./components/Section1/MineToMill";
import Sustainablity from "./components/Section2/Sustainability";
import MineralProcessing from "./components/Section3/MineralProcessing";
import OilAndGas from "./components/Section4/OilAndGas";

function App() {
  return (
    <div className="App">
      <Homepage />

      <MineToMill />

      <Sustainablity />

      <MineralProcessing />

      <OilAndGas />

      <Footer />
    </div>
  );
}

export default App;
