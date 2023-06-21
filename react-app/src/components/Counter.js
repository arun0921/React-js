import {useState} from "react"

function Counter() {
    let [like,setLike]=useState(0)
    let [dislike,setdislike]=useState(0)
    return (
        <div className="color">
            <button onClick={() => {
                setLike(like+1)
            } } style={{marginRight:"5px"}}>like👍{like}</button>

            <button onClick={()=>{
                setdislike(dislike+1)
            }}>dislike👎{dislike}</button>
        </div>
    );
}
export default Counter;