function PersonalisedRecipeCard({ name, timeRequired, serves, instructionSteps, difficulty, image, ingredients }){
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          {/* // ! Replace image */}
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p>Name: {name}</p>
        <p>Time Required: {timeRequired}</p>
        <p>Serves: {serves}</p>
        <br />
        <p>Instructions: 
          {instructionSteps.map((step, i) => (
            <ul key="step">
              <li>{i + 1}. {step}</li>
            </ul>
          ))}
        </p>
        <p>Difficulty: {difficulty}</p>
        <br />
        <div>Ingredients: 
          {ingredients.map(ingredient =>
            <ul key='name'>
              <li>{ingredient.name} - {ingredient.number}{ingredient.metric}</li>
            </ul>
          )}
        </div>      
      </div>
    </div>
  ) 
}
export default PersonalisedRecipeCard


