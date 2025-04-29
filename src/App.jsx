
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/recipeCategory/:id" element = {<Recipes />}/>
    </Routes>
  )
}

export default App
