import {useState} from "react";

let AddColor=()=>{
    let [butt,setbutt]=useState("red")
    //using territary

    return(
        <div style={{marginBottom:"10px"}}>
            <input></input>
            <button onClick={()=>{
                setbutt(butt)
            }}>add color</button>
        </div>
    )
}
export default AddColor;