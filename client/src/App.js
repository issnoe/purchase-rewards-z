import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [lis, setList] = React.useState(null);
  React.useEffect(() => {
    const getAssociations = () => {
      fetch("/purchases")
        .then((result) => result.json())
        .then((body) => {
          console.log(body);
        });
    };
    getAssociations();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
