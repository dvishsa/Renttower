import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />  
    </>
    
  )
}

export default Home
