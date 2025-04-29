import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Recipe = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState({})
  
  const fetchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        const data = await response.json()
        console.log(data)

  }

  useEffect(() => {
    console.log(idMeal)
    fetchRecipe()
  }, [idMeal])


  return(
    <div className="bg-white shadow-lg rounded-2xl p-6 m-4 space-y-4 max-w-2xl mx-auto">
  {/* <h2 className="text-2xl font-bold text-gray-800">Delicious Recipes</h2>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="p-4 border rounded-lg hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-600">Spaghetti Carbonara</h3>
      <p className="text-sm text-gray-600">Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
    </div>

    <div className="p-4 border rounded-lg hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-600">Butter Chicken</h3>
      <p className="text-sm text-gray-600">Creamy, rich curry made with tender chicken and aromatic spices.</p>
    </div>

    <div className="p-4 border rounded-lg hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-600">Pad Thai</h3>
      <p className="text-sm text-gray-600">Famous Thai stir-fried noodles with tamarind sauce and peanuts.</p>
    </div>

    <div className="p-4 border rounded-lg hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-600">Tacos al Pastor</h3>
      <p className="text-sm text-gray-600">Marinated pork tacos topped with pineapple and fresh cilantro.</p>
    </div>
  </div> */}
</div>
  )
};

export default Recipe;
