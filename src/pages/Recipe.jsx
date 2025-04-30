import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Recipe = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState({});

  const fetchRecipe = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await response.json();
    console.log(data);
    setRecipe(data.meals[0]);
  };

  useEffect(() => {
    console.log(idMeal);
    fetchRecipe();
  }, [idMeal]);


  return (
    <div className=" shadow-lg rounded-2xl p-6 m-4 space-y-4 max-w-2xl mx-auto">
      {/* {recipe.map((item) => (
        <div key={item.idMeal}>
          <img src={item.strMealThumb} alt="" />
          <h1>
            <span className="font-bold text-2xl">Dish Name:</span>{" "}
            {item.strMeal}
          </h1>
          <h2>
            <span className="font-bold text-xl">Dish Area:</span> {item.strArea}
          </h2>

          <p>
            {" "}
            <span className="font-bold text-xl">Dish Category:</span> {item.strCategory}
          </p>

          <h2 className="font-bold text-2xl font-serif">Ingredients:</h2>
          <ol>
            {
              
            }
          </ol>
        </div>
      ))} */}
    </div>
  );
};

export default Recipe;
