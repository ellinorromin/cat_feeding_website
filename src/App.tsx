//import { useState } from "react";

import "./App.css";
import Meal from "./components/Meal";

function App() {
  //const [count, setCount] = useState(0);

  //STEP 1: MEALTIMES
  //create a "mealtime" component with a mealtime-object
  //mealtime object {food: "", time: "", notes: "", check: true/false}

  //STEP 2: USER INPUT
  //make sure the user can check and uncheck the mealtime object check, and edit the notes

  //STEP 3: SAVE USER INPUT

  return (
    <main className="flex items-center justify-center flex-col ">
      <div className="m-4 border border-solid border-black m-4 p-4">
        <h1>TRISTAN FEEDING GENERATOR</h1>
        <h2>mjau mjau</h2>
      </div>
      <Meal />
    </main>
  );
}

export default App;
