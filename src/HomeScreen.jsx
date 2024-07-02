import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Requests'


const HomeScreen = () => {
  return (
    <div className='homeScreen'>
    {/* Nav */}
    <Nav/>

    {/* Banner */}
    <Banner/>

    {/* Row */}
     <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow /> 
     <Row
        title='ACTION MOVIES'
        fetchUrl={requests.fetchActionMovies}/> 
     <Row
        title='COMEDY MOVIES'
        fetchUrl={requests.fetchComedyMovies}/> 
     <Row
        title='DOCUMENTARIES'
        fetchUrl={requests.fetchDocumentaries} /> 
     <Row
        title='HORROR MOVIES'
        fetchUrl={requests.fetchHorrorMovies} /> 
     <Row
        title='ROMANCE MOVIES'
        fetchUrl={requests.fetchRomanceMovies} /> 
     <Row
        title='TOP RATED'
        fetchUrl={requests.fetchTopRated} /> 
     <Row
        title='TRENDING NOW'
        fetchUrl={requests.fetchTrending} /> 
     
    </div>
  )
}

export default HomeScreen