import React, { useEffect, useState } from "react";
import Recipe from "./content";

const Api = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b0f3025c92msh0669d79c4a196dap1e9fb9jsn7ecef3b561bd",
      "X-RapidAPI-Host": "cooking-recipe2.p.rapidapi.com",
    },
  };

  const [recipeData, setRecipeData] = useState([]);
  const [Recipes, setRecipes] = useState("");

  const recipe = recipeData.map((recipe) => {
    return(
        <div className="max-w-full max-h-full text-center">
            <a href={recipe.url} className="max-w-full max-h-full" target="_blank" >
                <h1 className="max-w-full">{recipe.title}</h1>
            </a>
        </div>
    )

  });

  useEffect(() => {
    getData();
  }, [Recipes]);

  const getData = async () => {
    const response = await fetch(
      "https://cooking-recipe2.p.rapidapi.com/",
      options
    );
    const data = await response.json();
    //const carryErr = data.catch((error) => console.error(error));
    //console.log(carryErr);
    console.log(data);
    setRecipeData(data);
  };


  return (
    <div className="max-w-full max-h-full">
        {recipe}
    </div>
  );
 
};
export default Api;
