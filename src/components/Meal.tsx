import React from "react";

type Meal = {
  food: string;
  time: string;
  notes: string;
  check: boolean;
};

type MealProp = {
  meal: Meal;
};

function Meal({ meal }: MealProp) {
  return (
    <article
      className={`border border-solid border-black m-4 p-4 ${
        meal.check ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <h1>{meal.food}</h1>
      <h2>{meal.time}</h2>
      <p>{meal.notes}</p>
    </article>
  );
}

export default Meal;
