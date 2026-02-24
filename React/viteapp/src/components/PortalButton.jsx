 import {createPortal} from 'react-dom'

 function PortalButton ({
    onClick,children
 }){
    
    return createPortal(
        <button onClick={onClick} style={{
            position:'fixed',
            
            right:"20",
            bottom:"20",
           padding:"10px",
            display:'flex',
            background: 'blue',
            color: 'white'
          
        }}>


            {children}
        </button>,
          
     document.body
    )
 } export default PortalButton;