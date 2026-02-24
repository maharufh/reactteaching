import { useState } from "react";
import PortalButton from "./components/PortalButton";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div
        style={{
          padding: "20px",
          border: "2px solid black",
          margin: "20px",
        }}
        onClick={() => {
          setCount1((c) => c + 1);
        }}
      >
        <h2>Div Clicked: {count1}</h2>
        <h2>Button Clicked: {count2}</h2>

        <PortalButton
          onClick={(e) => {
            e.stopPropagation();
            setCount2((c) => c + 1);
          }}
        ></PortalButton>
      </div>
    </>
  );
}

export default App;
