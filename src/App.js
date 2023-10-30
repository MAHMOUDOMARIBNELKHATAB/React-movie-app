import "./App.css";
import NavBar from "./components/navbar/nav";
import { BrowserRouter,Routes , Route } from "react-router-dom";
import Home from "./components/Home/home";
import LogIn from "./components/LogIn/login";
import Movies from "./components/movies/Movies";
import TVShows from "./components/TV Shows/TVShows";
import Details from "./components/details/Details";
import Signup from "./components/LogIn/Signup";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes> 
        <Route path="/"  element={<Home/>}/> 
          <Route  path="/home/:mediatype/:id"  element={<Details/>}/>
        <Route  path="/Movies"  element={<Movies/>}/> 
        <Route  path="/TVShows"  element={<TVShows/>}/> 
        <Route  path="/LogIn"  element={<LogIn/>}/> 
        <Route  path="/LogIn/Signup"  element={<Signup/>}/> 

      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
