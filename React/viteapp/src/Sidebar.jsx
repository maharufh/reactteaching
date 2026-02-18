  
import { useSelector } from 'react-redux';


function Sidebar() {
  const count =  useSelector((state) => state.counter.value);
  console.log("SideBar Rendered");
  return (
     <>
     <h2> Sidebar Count :{count}</h2>
     
     </>
  )
}
export default Sidebar