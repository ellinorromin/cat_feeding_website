//import { useState } from "react";

import "./App.css";
import Meal from "./components/Meal";

function App() {
  //const [count, setCount] = useState(0);

  //STEP 1: MEALTIMES
  //create a "mealtime" component with a mealtime-object
  //mealtime object {food: "", time: "", notes: "", check: true/false}
  //map out all the mealtimes via mealtime component
  //before adding user inputs, make the Meal component look visually good.

  const listOfMeals: Meal[] = [
    {
      food: "1 boll färskfoder",
      time: "6.00",
      notes: "no notes",
      check: true,
    },
    {
      food: "1/2 turkey monster",
      time: "12:00",
      notes: "no notes",
      check: true,
    },
    {
      food: "1/2 chicken monster",
      time: "16:00",
      notes: "no notes",
      check: false,
    },
    {
      food: "1 boll färskfoder",
      time: "22:00",
      notes: "no notes",
      check: false,
    },
  ];

  return (
    <main className="flex items-center justify-center flex-col ">
      <div className="m-4 border border-solid border-black m-4 p-4">
        <h1>TRISTAN FEEDING GENERATOR</h1>
        <h2>mjau mjau</h2>
      </div>
      {listOfMeals.map((meal: Meal) => {
        return <Meal meal={meal} />;
      })}
    </main>
  );
}

export default App;
