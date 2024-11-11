import axios from '../../Helpers/axios';
import React, { Fragment, useEffect, useState } from 'react'
import requests from '../../Helpers/requests';
import "./Banner.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { toast } from 'react-toastify';
import { subscribe } from 'firebase/data-connect';
const Banner = ({data}) => {
    const [movie,setMovie]=useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    const url="https://api.themoviedb.org/3/";
    useEffect(() => {
        const fetchData = async () => {
                const res = await axios.get(requests.fetchApp)
                setMovie(res.data.results[
                    Math.floor(Math.random() * res.data.results.length-1)
                ]);
                
        };
        fetchData();
        
    }, []);
    function trunate(string,n){
       return string?.length>n ? string.substr(0,n-1)+"..." : string;
    }

    const opts={
        height:900,
        width:'100%',
        playerVars:{
            autoplay:1
        }
   }
   const subscribe=()=>{
    toast.info("Subcribed",{theme:"colored",})
   }
   const closeHandler=()=>{
    setTrailerUrl('');
   
   }
   const handleClick=(movie)=>{
    if(trailerUrl){
        // setTrailerUrl('')
    }
    else{
        console.log(movie.title)
        movieTrailer(movie.title)
        .then((url)=>{
            console.log("Trailer",url)
            const urlParams = new URLSearchParams(new URL(url).search);
            const movieurl=urlParams.get('v');
            if(movieurl){
                setTrailerUrl(movieurl)
                toast.info("Netflix Streaming ")
            }
            else{
                console.log("No video found in url")
            }          
        })
        .catch(err=>{
            console.log(err)         
        })
    }
   }
   
  return (
    
       
            trailerUrl ? <div > <YouTube videoId={trailerUrl} opts={opts}  />
            <button onClick={closeHandler}>Close me</button>
            </div>
            :
            <Fragment>
    <header className="banner" style={
        {
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            
        }
    }>
        <div className='banner__contents'>
            <h2 className='banner_title'>
                {movie.title || movie.name || movie.originalname}
            </h2>
       
       <div className='banner_buttons'>
        <button className='banner_btn' onClick={()=>handleClick(movie)}>Play</button>
        <button className='banner_brn' onClick={subscribe}>Subcribe</button>
       </div>
       <h3 className='banner_desc'>
            {movie.overview}
       </h3>
      
       </div>
       <div className='banner_fade'></div>
       </header>
       </Fragment>
        
       
  
  )
}

export default Banner