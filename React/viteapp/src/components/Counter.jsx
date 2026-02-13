import React, { useState } from 'react'

function Counter() {
    const[count,setCount] = useState(0);
  return (
     <>
     <h2>This Is Counter App </h2>
     <h3> Count: {count}</h3>
     <button onClick={() => setCount(count+1)}>Count Button</button>
     </>
  )
}

export default Counter