import React,{ useState } from 'react'


//child function
const Button = React.memo(({onClick,text}) =>{
    alert(`Child ${text} button rendered`);
    return <button onClick={onClick}>{text}</button>
})


function WithoutCallbackExample() {
      const[count1,setCount1] = useState(0);
      const[count2,setCount2] = useState(0);

      const handleClick1 = () =>{
        setCount1(count1 + 1);
      };
      
      const handleClick2 = () =>{
        setCount2(count2 + 1);
      };
      alert("Parent renderd")
  return (
     <>
     
     <h2>Without useCallback</h2>
     <p>Count 1: {count1}</p>
     <p>Count 2: {count2}</p>

     <Button onClick={handleClick1} text = {"Button 1"} /> 
     <Button onClick={handleClick2} text = {"Button 2"} /> 
     </>
  )
}
// Socho ek restaurant me waiter hai (child button).
// Customer (parent component) bar-bar order deta hai.
// Agar restaurant har order me naya waiter bheje → confusion aur time waste.
// useCallback = Dedicated Waiter
// Ek hi waiter har order handle karega, jab tak menu (dependencies) change nahi hota.
// Customer info update ho ya background change ho → waiter rerender nahi hota.
// Basically: useCallback ensures the “worker” (function) doesn’t unnecessarily change unless it really needs to.
export default WithoutCallbackExample 