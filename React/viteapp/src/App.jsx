 import React from 'react'
import Fruits from './components/suspense/Fruits'
import { Suspense , lazy} from 'react'
import Bike from './components/suspense/Bike'
 
 function App() {
  const Bikes = lazy(() => import('./components/suspense/Bike'))
  const Fruits = lazy(() => import('./components/suspense/Fruits'))
   return (
     <>
     <Suspense fallback = {
      <div>
        Loading....
      </div>
     } >
      <Bike/>
      <Fruits/>
     </Suspense>
     </>
   )
 }
 
 export default App