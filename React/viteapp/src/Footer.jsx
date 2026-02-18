 
 
import { useSelector } from 'react-redux';


function Footer() {
   const count = useSelector((state) => state.counter.value)
  console.log("Footer Rendered");
  return (
     <>
     <h2> Footer Count :{count}</h2>
     <pre>
| Feature        | Pure Redux   | Redux Toolkit      <br />          
 
| Boilerplate    | Zyada        | Bahut kam                     <br />
| Action Types   | Alag file    | Nahi chahiye                  |<br />
| Switch Case    | Required     | Nahi                          |<br />
| Mutating State | Allowed nahi | Allowed (Immer use karta hai) |<br />
| Setup          | Manual       | configureStore auto setup     |

     </pre>
     
     </>
  )
}

export default Footer