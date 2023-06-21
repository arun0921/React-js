
import { useState } from 'react'
import Counter from './counter'
const Movie = ({ element }) => {
    // console.log(element)
    const { name, poster, rating, summary } = element
    console.log(name, poster, rating, summary)
    const [show, setShow] = useState(true)

    // Conditional Styling

    // if else
    // conditiontrue?true:false
    const toggleSummary = {
        // Key:Value
        // display:block
        // display:none
        display: show ? "block" : "none"
    }

    let ratingcolor={
        color:rating>8?"green":"red"
    }
    return (
        <div style={{ height:"500px",width:"314px",border:"1px solid red",marginBottom:"2%"}}>
            <img src={poster} alt="" style={{ width: "314.8px",height:"338px"}}/>
            <div style={{display:"flex",justifyContent: "space-between",padding:"0",margin:"0"}}>
                <h4>{name}
                    <button
                        onClick={() => {
                            setShow(!show)
                            // !show
                            // true=>false
                            // false=>true
                            console.log(show)
                        }}

                    >{show?"🔽":"🔼"}</button>
                </h4>

                <h4 style={ratingcolor}>⭐{rating}</h4>
            </div>
            {show &&<p
                //style=display:none|| display:block
                style={{overflow:"auto",height:"70px"}}
                >{summary}</p>}
            <Counter />
        </div>
    )
}
export default Movie;