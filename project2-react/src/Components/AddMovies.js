import React, { useState } from 'react';
const UpdateMovie = () => {
    let [movieName,setMovieName]=useState("")
    let [Poster,setPoster]=useState("")
    let [Rating,setRating]=useState("")
    let [Summary,setSummary]=useState("")

  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="" value={movieName} onChange={(e)=>{
        setMovieName(e.target.value)
      }} />
      <br />
      <br />

      <label htmlFor="">Poster</label>
      <input type="" value={Poster} onChange={(e)=>{
        setPoster(e.target.value)
      }} />
      <br />
      <br />

      <label htmlFor="">Rating</label>
      <input type="" value={Rating} onChange={(e)=>{
        setRating(e.target.value)
      }} />
      <br />
      <br />

      <label htmlFor="">Summary</label>
      <input type="" value={Summary} onChange={(e)=>{
        setSummary(e.target.value)
      }}/>
      <br />
      <br />
      <button onClick={()=>{
        let movies={
          name:movieName,
          Poster,
          Rating,
          Summary

        }
        console.log(movies)
      }}>addMovies</button>

    </div>
  );
}

export default UpdateMovie;
