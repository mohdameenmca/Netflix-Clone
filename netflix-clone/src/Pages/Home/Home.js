import React from 'react'
import Nav from '../../Components/Navigation/Nav'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import requests from '../../Helpers/requests'
export const Home = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Row
         title="Netflix Original"
         isLarge={true}
         fetchUrl={requests.fetchNetflixOriginals}
         />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
         {/* <Row title="Action" fetchUrl={requests.fetchActionMovie}/> */}
         <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
         <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
         <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
    </div>
  )
}
