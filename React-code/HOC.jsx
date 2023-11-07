import "./styles.css";

function MyComponent(props) {
  return <div>{props.data}</div>;
}

function YourComponent(MyComponent) {
  return () => <MyComponent data="Hello HOC" />;
}

const AppComponent = YourComponent(MyComponent);

function App() {
  return (
    <div className="App">
      <h1>
        <AppComponent />
      </h1>
    </div>
  );
}
export default App;
