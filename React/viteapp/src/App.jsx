import { useState } from 'react';
import PortalButton from './components/PortalButton';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid black',
        margin: '20px'
      }}
      onClick={() => {
        setCount1(c => c + 1);
      }}
    >
      <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>

      <p>
        Floating button portal ke through document.body me render ho raha hai,
        lekin React tree same hai — isliye bubbling kaam karegi.
      </p>

      <PortalButton
        onClick={() => {
          setCount2(c => c + 1);
        }}
      >
        Floating Button
      </PortalButton>
    </div>
  );
}

export default App;