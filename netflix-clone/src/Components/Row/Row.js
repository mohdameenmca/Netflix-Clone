import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../../Helpers/axios';
import requests from '../../Helpers/requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Banner from '../Banner/Banner';
const Row = ({title,fetchUrl,isLarge=false}) => {
    const [movies,setMovies] = useState([]);

    const [trailerUrl,setTrailerUrl] = useState("");
    const baseUrl = "https://image.tmdb.org/t/p/original"
    useEffect(()=>{
        const fetchData=async()=>{
            const req=await axios.get(fetchUrl)
            const data = await req.data.results;
            setMovies(req.data.results)
        }
        fetchData();
    },[fetchUrl])
   
   const opts={
        height:750,
        width:'100%',
        playerVars:{
            autoplay:1
        }
   }

   const handleClick=(movie)=>{
    if(trailerUrl){
        setTrailerUrl('')
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
    <div className='row'>
        <h2>{title}</h2>
        {/* <img src={baseUrl+"/nvaCnkl8RilLhVAQXPFei0tqkqW.jpg"}/> */}
        <div className='row_content'>
        {
            movies && 
            movies.map((movie)=>(
                // (isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path) && 
                (
                    
                    <img key={movie.id}
                    onClick={()=>handleClick(movie)}
                    className={`row_poster ${isLarge &&"row_posterLarger"}`}
                    src={`${baseUrl}${isLarge?
                        movie.poster_path
                        :
                        movie.backdrop_path}`}
                    />
                   
                

                )         
            ))
        }
       
        </div>
        <div className=''>
        {
            trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts}  on/>
        }
       
        </div>
    </div>
  )
}

export default Row