import React, { useState, useEffect } from "react";
import "./App.css";
import Api from "./api";
import { Spinner } from "react-bootstrap";

const App = () => {
  const dataApi = <Api />;
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);
  }, []);

  return (
    <div className="App">
      <section className="max-w-full max-h-full">
        {isLoadingData ? (
          dataApi
        ) : (
          <div className=" w-screen h-screen flex justify-center items-center">
            <Spinner />
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
