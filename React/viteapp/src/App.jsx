 import React from 'react'

 const fruitlist = ['apple','banana','cherry'];

// const users = [{id:1,name:'Rahul',age: 25},
//   {id:2,name:'Gunjan',age: 24},
//   {id:3,name:'Maharufh',age: 24},
  
// ]
 
 function App() {
   return (
     <div>
      <ul>
        {fruitlist.map((fruit,index,array) => {
          return(

            
            <li key={fruit}> Name:{fruit}, Index: {index}, Array:{array}</li>
          )
          }
        )}
      </ul>
     </div>
   )
 }
 
 export default App