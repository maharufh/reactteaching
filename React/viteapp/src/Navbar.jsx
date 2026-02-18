import { useSelector } from "react-redux";

function Navbar() {

  const count = useSelector((state) => state.counter.value);

  console.log("Navbar Rendered");

  return (
    <>
      <h2>Navbar Count: {count}</h2>
    </>
  );
}

export default Navbar;
