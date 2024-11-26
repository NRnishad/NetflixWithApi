import "./App.css";
import { original, ActionMovies, RomanceMovies } from "./constants/urls";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      RomanceMovies
      <NavBar></NavBar>
      <Banner></Banner>
      <RowPost url={original} title="Netflix Originals"></RowPost>
      <RowPost url={ActionMovies} title="ActionMovies" isSmall></RowPost>
      <RowPost url={RomanceMovies} title="RomanceMovies" isSmall></RowPost>
    </div>
  );
}

export default App;
