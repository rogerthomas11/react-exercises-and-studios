import { useState } from 'react'
import './App.css'
import './components/Description'
import './components/Ingredients'

function App() {

  return (
    <>
      <div className="App">
      </div>
      <div className="App">
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </>
  )
}

export default App
