
import { original, ActionMovies, RomanceMovies,Trending,ComedyMovies,HorrorMovies } from "../constants/urls";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";


function Home() {
  return (
    <div className="homeParentDiv">
      <NavBar></NavBar>
      <Banner></Banner>
      <RowPost url={Trending} title="Trending" ></RowPost>
      <RowPost url={ActionMovies} title="ActionMovies" isSmall></RowPost>
      <RowPost url={RomanceMovies} title="RomanceMovies" isSmall></RowPost>
      <RowPost url={ComedyMovies} title="ComedyMovies" isSmall></RowPost>
      <RowPost url={original} title="Netflix Originals" isSmall></RowPost>
      <RowPost url={HorrorMovies} title="HorrorMovies" isSmall></RowPost>
    </div>
  );
}

export default Home;
 
