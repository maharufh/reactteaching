import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("Home Rendered");

  return (
    <>
      <h2>Home Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </>
  );
}

export default Home;
