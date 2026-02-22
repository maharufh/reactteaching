import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("Rahul");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form>
        <select value={name} onChange={handleChange}>
          <option value="Maharufh">Maharufh</option>
          <option value="Kishor">Kishor</option>
        </select>

         
      </form>
    </>
  );
}

export default MyForm;