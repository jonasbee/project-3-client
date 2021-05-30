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
        <figure className="image is-2by1">
          {/* // ! Replace image */}
          <img src={icon} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="mb-2 is-capitalized has-text-weight-bold">Name: <span className="has-text-weight-normal">{name}</span></p>
        <p className="mb-3 is-capitalized has-text-weight-bold">Category: <span className="has-text-weight-normal">{category}</span></p>
        <form onSubmit={handleSubmit}>

          {/* <div className="field-group">
            <div className="field is-inline-block-desktop">
              <label className="label">Quantity:</label>
              <input 
                className ="input mb-2"
                type="number" 
                id="quantity"
                placeholder="e.g. 2"
                name="quantity"
                onChange={handleChange}>
              </input>
            </div>
          </div> */}

          <label className="label">Quantity:</label>
          <input 
            className ="input mb-2"
            type="number" 
            id="quantity"
            placeholder="e.g. 6"
            name="quantity"
            onChange={handleChange}>
          </input>
          <br />
          <label className="label">Date:</label>
          <input 
            className="input mb-3"
            id="expiryDate"
            type="date"
            name="expiryDate"
            onChange={handleChange} > 
          </input>
          <br />
          <button className="button is-primary has-text-weight-bold is-size-6 is-small is-fullwidth" type="submit">Add</button>
        </form>
        <br />
      </div>
    </div>
  ) 
  
}

export default ItemCard
