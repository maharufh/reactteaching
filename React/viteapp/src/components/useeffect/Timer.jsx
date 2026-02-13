import React, { useEffect, useState } from 'react'

function Timer() {
    const [count,setCount] = useState(0);
  

   useEffect (() => {
      setTimeout(() => {
        setCount((count) => count + 1)
    },1000);
    
   },[])
  return (
   <>
   <h2> I am count for {count} times</h2>
   <button onClick={() => setCount((c) => c +1)} > increase </button>
 
   </>
  )
}

export default Timer