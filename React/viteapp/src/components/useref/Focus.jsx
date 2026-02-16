import React,{useRef} from 'react'

function Focus() {
    const inputElement = useRef();
    const focusInput = () =>{
        inputElement.current.focus();
    }
  return (
     <> 
     <input type="text" ref={inputElement} />
     <br /> <br />
     <button onClick={focusInput} >foucs input </button>
     </>
  )
}

export default Focus