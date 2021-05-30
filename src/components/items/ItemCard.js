import { useHistory } from 'react-router'
import { createInventoryItem } from '../../lib/api'
import { useForm } from '../../hooks/useForm'

function ItemCard({ name, category, icon, id }) {
  const history = useHistory()
  const { formdata, formErrors, handleChange, setFormErrors } = useForm({
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
      setFormErrors(err.response.data.errors)
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
        <form onSubmit={handleSubmit}>
          <input
            className={`input ${formErrors.quantity ? 'is-danger' : ''}`}
            type="number"
            id="quantity"
            placeholder="quantity"
            name="quantity"
            onChange={handleChange}>
          </input>
          {formErrors.quantity && (
            <small className="help is-danger">Please enter valid quantity</small>
          )}
          <br />
          <input
            id="expiryDate"
            type="date"
            name="expiryDate"
            min={`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + (new Date().getDate())).slice(-2)}`}
            onChange={handleChange}
          >
          </input>
          < button type="submit">Add</button>
        </form>
        <br />
      </div>
    </div>
  )

}

export default ItemCard