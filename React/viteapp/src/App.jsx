import React, {  } from "react";
import WithoutCallbackExample from "./components/usecallback/WithoutCallbackExample";
import WithCallBackExample from "./components/usecallback/WithCallBackExample";
import ExpensiveDemo from "./components/usecallback/ExpensiveDemo";
 

 
 
function App() {
 

  return (


    // <UserContext.Provider value={user}>
    //   <h2> i m component one so hello {user}</h2>
    //   <Component3 />
    // </UserContext.Provider>
    <>

   {/* <WithoutCallbackExample/> */}
 <ExpensiveDemo/>
   

    </>
  );
}

export default App;
