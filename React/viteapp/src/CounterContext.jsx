import React, { createContext, useState } from 'react'


export const CounterContext = createContext();

export const CounterProvider = ({children}) => {
     const[count,setCount] = useState(0);


     console.log("Context Render");
     
     
     return (

        <CounterContext.Provider value={{count,setCount}}>
            {children}
        </CounterContext.Provider>
         
         
    );
};
 
