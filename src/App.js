import BulbOff from "./BulbOff";
import BulbBroken from "./BulbBroken";
import { useState } from "react";

function App() {
  const [breakBulb, setBreakBulb] = useState(false);
  const [bulb, setBulb] = useState(false);

  return (
    <div>
      {breakBulb ? <BulbBroken /> : <BulbOff props={bulb} />}

      <button onClick={() => setBulb(!bulb)}>Toggle</button>
      <button onClick={() => setBreakBulb(!breakBulb)}>
        {breakBulb ? `Fix the Bulb` : `Break the Bulb`}
      </button>
      <h1>Made by Shoaib Tahir</h1>
      
    </div>
  );
}

export default App;
