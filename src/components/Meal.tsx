import React from "react";

type Meal = {
  food: string;
  time: string;
  notes: string;
};

function Meal() {
  const MEAL: Meal = {
    food: "Monster Turkey",
    time: "12",
    notes: "han åt ok",
  };

  return (
    <article className="border border-solid border-black m-4 p-4">
      <h1>{MEAL.food}</h1>
      <h2>{MEAL.time}</h2>
      <p>{MEAL.notes}</p>
    </article>
  );
}

export default Meal;
