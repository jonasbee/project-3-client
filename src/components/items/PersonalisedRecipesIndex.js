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
      <h2 className="title is-2">Personalised Recipes</h2>
      <section className='section'>
        <div className='container'>
          <div className="columns is-multiline">
            {recipes ? (
              recipes.map(recipe => ( 
                <PersonalisedRecipeCard
                  key={recipe._id} 
                  { ...recipe }
                />
              ))
            ) : (
              <p>...Loading</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default PersonalisedRecipes