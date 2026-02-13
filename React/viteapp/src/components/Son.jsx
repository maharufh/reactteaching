import React from 'react'

export default function Son(props) {
  return (
    <>
    <div style={{background:'lightgreen', color:"black"}}>
        <h5> I m the son component</h5>
<div>
    {props.children}
</div>
    

   
    </div>
    </>
  )
}
