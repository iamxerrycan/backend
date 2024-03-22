import axios  from "axios";
import { useEffect, useState } from "react";


const Datafrombackend = () => {
  const [jokes, setJokes] = useState([]);

  const getData = () => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1> hi </h1>
      <p>Jokes from backend .</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.name}</h3>
        </div>
      ))}
    </>
  );
};

export default Datafrombackend;
