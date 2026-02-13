// import React from "react";

// function Demo() {
//   const bikes = [
    
//     { id:101,brand:'bullet'},
//     { id:102,brand:'bmw'},
//     { id:103,brand:'jawa'},
//     { id:104,brand:'hunter'}
// ];
//   return (
//     <>
//       <h2>hii i m demo for Bikes</h2>
//       <ul>
//         {bikes.map((bike) => (
//           <li key={bike.id}>i m the {bike.brand}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Demo;

import React from "react";

function Demo() {
  const bikes = [
    
   "bullet","ktm","hunter","passionpro"
];
  return (
    <>
      <h2>hii i m demo for Bikes</h2>
      <ul>
        {bikes.map((bike,index) => (
          <li key={index}>i m the {bike}</li>
        ))}
      </ul>
    </>
  );
}

export default Demo;

