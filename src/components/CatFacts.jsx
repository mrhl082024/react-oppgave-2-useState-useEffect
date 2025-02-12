import { useEffect, useState } from "react";
import "../styles/catFacts.css";

export default function CatFacts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://catfact.ninja/facts?limit=5`);
        if (!response.ok) {
          throw new Error(`HTTP Error. Status ${response.status}`);
        }
        const result = await response.json();

        setData(result.data);
        // setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // function appendFacts() {
  //   const createFacts = document.querySelector("#create-facts")
  //   for (let i = 0; i < data.data.length; i++) {
  //     const fact = document.createElement("li");
  //     fact.className = "li-facts"
  //     fact.textContent = data.data[i].fact;
  //     createFacts.appendChild(fact)
  //   }
  // }


  return (
    <div id="cat-card">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data.map((obj, index) => (
        <p id="facts" key={index}>{obj.fact}</p>
      ))}

    </div>
  );
}
