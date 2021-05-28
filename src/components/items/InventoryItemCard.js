import React from 'react'
import { useHistory } from 'react-router'
import { toggleShareStatus, deletePersonalisedItem } from '../../lib/api'
import { useForm } from '../../hooks/useForm'




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
        <p>Quantity: {quantity}</p>
        <p>Expiry Date: {expiryDate}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <button 
          type="submit"
          className={`button ${shareStatus ? 'is-success' : ''}`}
        >
          Share
        </button>
      
      </form>
      <button 
        type="submit"
        className="button is-danger"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  ) 
}

export default InventoryItemCard

