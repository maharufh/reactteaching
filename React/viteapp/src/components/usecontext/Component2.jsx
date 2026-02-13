import React from 'react'
import Component3 from './Component3'

function Component2({user}) {
  return (
      <> 
      <h2> This IS Component 2</h2>
      <Component3 user = {user}/>
      
      
      </>
  )
}

export default Component2