import React from "react";
import "./App.css";
import Api from "./api";

const App = () => {
  const dataApi = <Api />;

  return (
    <div className="App">
      <section className="max-w-full max-h-full">{dataApi}</section>
    </div>
  );
};

export default App;
