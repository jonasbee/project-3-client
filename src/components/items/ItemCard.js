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
    <div className="card m-5">
      <div className="card-image">
        <figure className="image is-4by3">
          {/* // ! Replace image */}
          <img src={icon} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p>Name: {name}</p>
        <p className="mb-2">Category: {category}</p>
        <form onSubmit={handleSubmit}>
          <input 
            className ="input mb-2"
            type="number" 
            id="quantity"
            placeholder="quantity"
            name="quantity"
            onChange={handleChange}>
          </input>
          <br />
          <input 
            className="input mb-3"
            id="expiryDate"
            type="date"
            name="expiryDate"
            onChange={handleChange} > 
          </input>
          <br />
          <button className="button is-primary is-small is-fullwidth" type="submit">Add</button>
        </form>
        <br />
      </div>
    </div>
  ) 
  
}

export default ItemCard
