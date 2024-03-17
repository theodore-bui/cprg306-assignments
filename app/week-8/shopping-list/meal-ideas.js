"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas(ingredient) {
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <div>
        <h1 className="text-2xl">Meal Ideas</h1>
        {!meals && <p>No meal ideas found for {ingredient}</p>}
        {meals && (
          <p className="mb-5">Here are some meal ideas using {ingredient}</p>
        )}
        {meals &&
          meals.map((meal) => (
            <li className="mb-5" key={meal.strMeal}>
              {meal.strMeal}
            </li>
          ))}
      </div>
    </div>
  );
}
