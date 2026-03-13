import React from 'react'
import './MyStylesheet.css'

function Bike() {

    const bikes = ['ninja',"r15",'ktm','bullet']

  return (
    <>
      <h2 className="back">My best bikes are:</h2>

      <ul>
        {bikes.map((bike,index) =>(
          <li key={index}>{bike}</li>
        ))}
      </ul>
    </>
  )
}

export default Bike