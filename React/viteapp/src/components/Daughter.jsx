import React from 'react'

export default function Daughter(props) {
    
  return (
    <>
        <div style={{background:'brown', color:"black"}}>
        <h5> I m the daughter component</h5>
<div>
    {props.children}
</div>
    

      
    </div>
    </>
  )
}
