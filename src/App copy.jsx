// import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Search2 from "./components/Search2";
import NewFoodList from "./components/NewFoodList";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodNewData, setFoodNewData] = useState([]);
  console.log(foodNewData);
  return (
    <div className="app">
      {/* <Search foodData={foodData} setFoodData={setFoodData} /> */}
      <Search2 foodNewData={foodNewData} setFoodNewData={setFoodNewData} />
      <NewFoodList foodNewData={foodNewData} />
      {/* <FoodList foodData={foodData} /> */}
    </div>
  );
}

export default App;
