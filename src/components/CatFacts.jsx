import { useEffect, useState } from "react";

export default function CatFacts() {
  const [data, setData] = useState(null);
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
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div>
          <p>Cat Facts:{data.data[0].fact} </p>

        </div>
      )}
    </div>
  );
}
