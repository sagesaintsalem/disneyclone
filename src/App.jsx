import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ForYou from './components/ForYou'
import ProdHouse from './components/ProdHouse'
import TVSeries from './components/TVSeries'
import GenreList from './components/GenreList'


function App() {
  
  return (
    <div className='m-0 space-y-3'>
      <Header />
      <Slider/>
      <ProdHouse />
      <ForYou />
      <TVSeries />
      <GenreList />
    </div>
  )
}

export default App

