import React from 'react'
import { useHistory } from 'react-router'
import { toggleShareStatus, deletePersonalisedItem ,editPersonalisedItem } from '../../lib/api'

function InventoryItemCard({ name, category, icon, id, quantity, expiryDate, shareStatus }) {
  
  const history = useHistory()
  // const [sharedState, setSharedState] = useState(shareStaus)
  // const { formdata, handleChange } = useForm({
  //   ,
  // })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await toggleShareStatus(id, !shareStatus)
      history.push('/inventoryitemsmap')
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async () => {
    try {
      console.log('Delete')
      console.log('Inventory Item ID: ', id)
      console.log(deletePersonalisedItem(id))
      await deletePersonalisedItem(id)
      history.go(0)
    } catch (err) {
      console.log(err)
    }
  }
  
  const [isButtonClicked, setEditButtonClicked] = React.useState(false)
  const [newQuantity, setNewQuantity] = React.useState(null)

  const handleEdit = (e) => {
    try {
      setEditButtonClicked(!isButtonClicked)
      console.log(e.target.value)
    } catch (err){
      console.log(err)
    }
  }  
  
  const handleSave = async () => {
    try {
      await editPersonalisedItem(id, newQuantity)
      console.log(newQuantity)
      history.go(0)
    } catch (err){
      console.log(err)
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
      {!isButtonClicked ? 
        <>
          <div className="card-content">
            <p>Name: {name}</p>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
            <p>Expiry Date: {new Date(expiryDate).toLocaleDateString()}</p>
          </div>

          <button 
            type="submit"
            className="button is-info"
            name='quantity'
            onClick={handleEdit}
          >
            Edit quantity
          </button>
        </>
        :
        <>
          <div className="card-content">
            <p>Name: {name}</p>
            <p>Category: {category}</p>
            <label htmlFor="quantity">Quantity: </label>
            <input type="number" id="quantity" 
              placeholder={quantity} 
              onChange={event => setNewQuantity({
                'quantity': `${event.target.value}`,
              })}
            />
            <p>Expiry Date: {new Date(expiryDate).toLocaleDateString()}</p>
          </div> 

          <button 
            type="submit"
            className="button is-warning"
            name='quantity'
            onClick={handleSave}
          >
            Save Changes
          </button>
        </>
      }

      {shareStatus ?
        <button 
          type="submit"
          className="button is-success"
          onClick={handleSubmit}
        >
        Item Shared
        </button>
        :
        <button 
          type="submit"
          className="button is-dark"
          onClick={handleSubmit}
        >
        Share
        </button>
      }

      <button 
        type="submit"
        className="button is-danger"
        name='quantity'
        onClick={handleDelete}
      >
        Delete
      </button>

    </div>
  ) 
}

export default InventoryItemCard

