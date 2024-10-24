import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");
  //syntax of useEffect hook, arguement: 1> Callback 2> dependency array
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;

// Video 48

// const Search = () => {
//   const [query, setQuery] = useState("pizza");
//   //syntax of useEffect hook, arguement: 1> Callback 2> dependency array
//   useEffect(() => {
//     function demo() {
//       console.log("Demo function executed.");
//     }
//     demo();
//   }, [query]);

//   return (
//     <div>
//       <input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         type="text"
//       />
//     </div>
//   );
// };

// export default Search;
