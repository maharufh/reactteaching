import React, { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState('banana');

  const handleChange = (event) => {
     setInputs(event.target.value)
  };

  const handleSubmit = (event) =>{
 alert(`Your Favorite fruit is : ${inputs}` );
 event.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p> Select your Favorite Fruit: </p>
        <label>  
          <input
            type="radio"
            name="fruit"
            value="apple"
            checked = {inputs === 'apple'}
            onChange={handleChange} 
          />Apple
        </label>
        <br />
        <label>  
          <input
            type="radio"
            name="fruit"
            value="banana"
            checked = {inputs === 'banana'}
            onChange={handleChange}
          /> Banana
        </label>
        <br />
        <label>  
          <input
            type="radio"
            name="fruit"
            value="cherry"
            checked = {inputs == 'cherry'}
            onChange={handleChange}
          /> Cherry
        </label>
        <br />
  
       
         <button type="submit"> Submit</button>
      </form>
    </>
  );
}
 
export default MyForm;
