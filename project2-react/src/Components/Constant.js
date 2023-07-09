import Movie from "./Movie";
import { allMovie } from "./MovieList";
let MovieData=()=>{
    return(
        <div style={{
            display: "flex",
            gap:"2%",
            flexWrap:"wrap",
            border:"1px solid red",
            /* border:1px solid red; */
            marginTop:"2%",
            width: "77.5%",
            marginRight:"1%",
            marginLeft:"1%",
            marginTop:"2%"
          }}>
            {
              allMovie.map((element) => {
                return <Movie element={element} />
              })
            }
          </div>
    )
}
export default MovieData;