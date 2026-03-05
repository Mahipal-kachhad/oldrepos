import { useState } from "react";
import Toggle from "./assets/Toggle";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Toggle toggle={toggle} />
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default App;
