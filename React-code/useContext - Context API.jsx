import "./App.css";
import React, { useContext } from "react";

//  <<<< ====== CREATER   =======>>>>>>
const State = React.createContext();

//  <<<< ====== PROVIDER  =======>>>>>>
function MyProvider(props) {
  const UserData = [{ name: "Avneesh" }, { name: "Rohit" }, { name: "Daya" }];
  return <State.Provider value={UserData}>{props.children}</State.Provider>;
}
//  <<<< ====== CONSUMER  =======>>>>>>
function MyConsumer() {
  const user = useContext(State);
  console.log("user", user);
  return (
    <div>
      {user.map((data, index)=> {
        return (
          <div>{data.name}</div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>
        <MyProvider>
          <MyConsumer />
        </MyProvider>
      </h1>
    </div>
  );
}

export default App;
