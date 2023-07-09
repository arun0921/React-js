
import "./App.css"
import UpdateMovie from "./Components/AddMovies";
import Header from "./Components/Bootsrap ";
import MovieData from "./Components/Constant";
import Color from "./Components/AddColour";
import { Route, Routes } from "react-router-dom";
import NotFind from "./Components/NotFound"


let app = () => {

  return (
    <>
     
        <Header />
        <Routes>
          <Route exact path="/" element={<MovieData/>}/>
          <Route exact path="/AddColour" element={ <Color/>}/>
          <Route exact path="/AddMovies" element={<UpdateMovie/>}/>
          <Route exact path="*" element={<NotFind/>}/>
          {/* <UpdateMovie/>
      <Color/>
      <MovieData/> */}
          </Routes>
     
    </>
  )
}
export default app;
