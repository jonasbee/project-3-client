import React from 'react'
import { getAllRecipes } from '../../lib/api'
import RecipeCard from './RecipeCard'


function RecipeIndex () {
  const [recipes, setRecipes] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllRecipes get request from lib
        const { data } = await getAllRecipes()
        setRecipes(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <section className='section'>
      <div className='container'>
        <div className="columns is-multiline">
          {recipes ? (
            recipes.map(recipe => (
              <RecipeCard 
                key={recipe._id} 
                // name={recipe.name} 
                // timeRequired={recipe.timeRequired} 
                // serves={recipe.serves}
                // instructionSteps={recipe.instructionSteps}
                // difficulty={recipe.difficulty}
                // image={recipe.image}
                // ingredients={recipe.ingredients}
                { ...recipe }
              />))
          ) : (
            <p>...Loading</p>
          )}
        </div>
      </div>
    </section>
  )

}

export default RecipeIndex