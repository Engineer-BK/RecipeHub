// import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerConatiner from "./components/InnerConatiner";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="app">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerConatiner>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerConatiner>
        <InnerConatiner>
          <FoodDetails foodId={foodId} />
        </InnerConatiner>
      </Container>
    </div>
  );
}

export default App;
