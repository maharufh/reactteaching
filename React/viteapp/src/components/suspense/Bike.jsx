import React from 'react'

function Bike() {
    const bikes = ['ninja',"r15",'ktm','bullet']
  return (
 <>
 <h2>My best bikes are:</h2>
 <ul>
    {bikes.map((bike,index) =>(
        <li key={index} >{bike}</li>
    ))}
 </ul>
 </>
  )
}

export default Bike