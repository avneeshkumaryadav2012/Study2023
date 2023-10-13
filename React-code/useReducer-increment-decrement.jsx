import React, { useReducer } from "react";

const InitStare = { count: 0 };

// Reducer function that defines how the state should be updated based on actions
function counterReducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function App() {

  // Initialize state using useReducer
  const [state, setState] = useReducer(counterReducer, InitStare);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => setState({ type: "Increment" })}>Increment</button>
      <button onClick={() => setState({ type: "Decrement" })}>Decrement</button>
    </div>
  );
}
