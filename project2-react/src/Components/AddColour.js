import {useState} from "react";

let Color=()=>{
    let [colorval,setcolorval]=useState()

    let stylecolor={
        backgroundColor:colorval
    }
    return(
        <div>
            <input
            type="text"
            value={colorval}
            style={stylecolor}
            onChange={(e)=>{
                setcolorval(e.target.value)
            }}
             />
            <button>addColor</button>
        </div>
    )
}
export default Color;