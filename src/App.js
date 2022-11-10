import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./App.css";
import Api from "./api";
import Recipe from "./content";

const App = () => {
  const APP_ID = "ab6ab860";
  const APP_KEY = "a3bb793109413185f9e27ef8fea8c43e";
  const connect = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(connect);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data)
  };

  
  const dataApi = <Api/>;

  return (
    <div className="App">
      <div className="max-w-full max-h-full">
        <section></section>
        <section className="max-w-full">
          
        </section>
        <section className="max-w-full max-h-full">{dataApi}</section>
        <section className="max-w-full"></section>
      </div>
    </div>
  );
};

export default App;
