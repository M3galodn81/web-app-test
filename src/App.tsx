
import React from 'react'
import Navigation from './components/Navigation'
import './App.scss'

// https://valorant-api.com/v1/agents

function App() {
  

  return (
    <>
      
      <div className='container'>
      <Navigation />
        <div className="hero">
          <div className="bg main-title">
            VALORANT Content
          </div>

          <div className="bg sub-title">
            Find everything about Valorant here!
          </div>

          <div className="bg explore-button">
            Explore
          </div>

        </div>

        <div className="container">
          
          <div className="title"></div>
          
          <div className="picture"></div>
        </div>

      </div>
    
    </>
  )
}

export default App
