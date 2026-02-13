import React from "react";
import WorkDone from "./WorkDone";
import WorkNotDone from "./WorkNotDone";

function Child(props) {
  const isWork = props.isWork;
   return (
    <>
    {/* {props.isWork && <h1> Done </h1>} */}
    {
      isWork ? <WorkDone/> : <WorkNotDone/>
    }
    </>
   )
 
}

export default Child;
