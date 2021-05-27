function ItemCard({ name, category, icon }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          {/* // ! Replace image */}
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <p>Name: {name}</p>
        <p>Category: {category}</p>
        <p>Icon: {icon}</p>
        <input type="number" placeholder="quantity"></input>
        <br />
        <input type="date"></input>
        <br />
        <button>Add</button>
      </div>
    </div>
  ) 
}

export default ItemCard