import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();
      setMeals(meals);
    }
    fetchMeals();
  }, []);

  console.log(meals);

  return (
    <div id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </div>
  );
}
