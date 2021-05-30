import { useHistory } from 'react-router'
import { createInventoryItem } from '../../lib/api'
import { useForm } from '../../hooks/useForm'

function ItemCard({ name, category, icon, id }) {
  const history = useHistory()
  const { formdata, handleChange } = useForm({
    quantity: '',
    expiryDate: '',
  })


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log(id)
      console.log(formdata)
      const newItem = await createInventoryItem(id, formdata)
      console.log(newItem)
      history.push('/inventoryitems')
    } catch (err) {
      // ! Set to BE api errors
      console.log('BE Errors: ', err.response.data.message)
      // setFormErrors(err.response.data.errors)
    }
  }
    
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          {/* // ! Replace image */}
          <img src={icon} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p>Name: {name}</p>
        <p>Category: {category}</p>
        <img className="image is-128x128 " src={icon}/>
        <form onSubmit={handleSubmit}>
          <input 
            className ="input"
            type="number" 
            id="quantity"
            placeholder="quantity"
            name="quantity"
            onChange={handleChange}>
          </input>
          <br />
          <input 
            id="expiryDate"
            type="date"
            name="expiryDate"
            onChange={handleChange} > 
          </input>
          < button type="submit">Add</button>
        </form>
        <br />
      </div>
    </div>
  ) 
  
}

export default ItemCard
