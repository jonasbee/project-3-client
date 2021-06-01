import React from 'react'
import { getAllPersonalisedRecipes } from '../../lib/api'
import PersonalisedRecipeCard from './PersonalisedRecipesCard'

function PersonalisedRecipes() {
  const [recipes, setRecipes] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllPersonalisedRecipes GET request from lib
        const { data } = await getAllPersonalisedRecipes()
        setRecipes(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <>
      <h1 className="title is-1 has-text-centered mt-6">Recipefinder</h1>
      <h4 className="subtitle is-4 has-text-centered mt-4">Based on your personaly inventory, we can suggest the following recipes...</h4>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-centered">
            {recipes ? (
              recipes.map(recipe => (
                <PersonalisedRecipeCard
                  key={recipe._id}
                  {...recipe}
                />
              ))
            ) : (
              <p>...Loading</p>
            )}
            {recipes && recipes.length === 0 && (
              <h5 className="subtitle is-5 has-text-centered mt-5">We have not found any matches for your inventory. Try again soon, we are constantly adding new recipes.</h5>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default PersonalisedRecipes