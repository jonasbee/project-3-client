function RecipeCard({ name, timeRequired, serves, instructionSteps, difficulty, image, ingredients }) {
  return (
    <div className="card mb-6">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h2 className="subtitle is-2 mb-4 is-capitalized has-text-weight-bold">{name}</h2>
        <h5 className="subtitle is-5 mb-2 is-capitalized has-text-weight-bold">Time Required: <span className="has-text-weight-normal">{timeRequired}</span></h5>
        <h5 className="subtitle is-5 mb-2 is-capitalized has-text-weight-bold">Serves: <span className="has-text-weight-normal">{serves}</span></h5>
        <h5 className="subtitle is-5 mb-5 is-capitalized has-text-weight-bold">Difficulty: <span className="has-text-weight-normal">{difficulty}</span></h5>
        <h5 className="subtitle is-5 has-text-weight-bold">Instructions: </h5>
        <div>  
          {instructionSteps.map((step, i) => (
            <ul key={step}>
              <li className="mb-2">{i + 1}. {step}</li>
            </ul>
          ))}
        </div>
        <br />
        <h5 className="subtitle is-5 has-text-weight-bold">Ingredients: </h5>
        <div>
          {ingredients.map(ingredient =>
            <ul key={ingredient.name} className="is-capitalized">
              <li>{ingredient.name} {ingredient.number}{ingredient.metric}</li>
            </ul>
          )}
        </div>      
      </div>
    </div>
  ) 
}

export default RecipeCard