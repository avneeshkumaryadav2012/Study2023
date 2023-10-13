// Use Ref

// it create a mutable variable which will not re-render component
// to access DOM elemement Directely

import "./App.css";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  // const [count, setCount] = useState(0);

  const firstNameRef = useRef('');

  const chanageStyle = () => {
    console.log('firstNameRef', firstNameRef.current)
  }

  useEffect(() => {
    // setCount(count + 1);
    // count.current = count.current + 1;
  });



  return (
    <div className="App">
      <input
        ref={firstNameRef}
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button onClick={chanageStyle}> Submit</button>
    </div>
  );
}

export default App;
