import {useState} from "react"; 

let Counter=()=>{
    let [like,setlike]=useState(0)
    let[dislike,setdislike]=useState(0)
    return(
        <div>
            <button onClick={
                ()=>{
                    setlike(like+1)
                }
            } style={{padding:"2px 4px 2px 4px",marginLeft:"4px"}}>👍{like}</button>
            <button onClick={
                ()=>{
                    setdislike(dislike+1)
                }
            } style={{padding:"2px 4px 2px 4px",marginLeft:"4px"}}>👎{dislike}</button>
        </div>
    )
}
export default Counter;