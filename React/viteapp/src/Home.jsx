import useFetch from "./components/customhook/useFetch";

function Home() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
    </>
  );
}

export default Home;