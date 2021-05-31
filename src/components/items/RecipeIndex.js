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
    <>
      <h1 className="title is-1 has-text-centered mt-6">Recipe Index</h1>
      <section className='section'>
        <div className='container'>
          <div className="column is-multiline is-centered">
            {recipes ? (
              recipes.map(recipe => (
                <RecipeCard 
                  key={recipe._id} 
                  { ...recipe }
                />))
            ) : (
              <p>...Loading</p>
            )}
          </div>
        </div>
      </section>
    </>
  )

}

export default RecipeIndex