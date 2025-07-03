// EffectOne.js
// import "./App.css";
import { useContext, useEffect, useState } from "react";
import { EffectContext, EffectContext2 } from "../App";
const EffectOne = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const g = useContext(EffectContext2);
  console.log(g);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setFetchedData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>📷 Photos from API</h1>
      <ul>
        {fetchedData.slice(0, 5).map((item) => (
          <li key={item.id}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EffectOne;
