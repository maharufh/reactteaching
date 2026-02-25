 
import React from "react";

function fetchFruitData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Apple", "Banana", "Cherry"]);
    }, 0);
  });
}

let fruitResource = {
  data: null,
  promise: null,

  read() {
    if (this.data !== null) return this.data;

    if (!this.promise) {
      this.promise = fetchFruitData().then((result) => {
        this.data = result;
      });
    }

    throw this.promise;  
  },
};

function Fruits() {
  const fruits = fruitResource.read();

  return (
    <>
      <h2>My Favorite Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default Fruits;