import React from 'react'
import { getAllInventoryItems } from '../../lib/api'
import InventoryItemCard from './InventoryItemCard'

function InventoryItems() {
  const [inventoryItems, setInventoryItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [selectedInventoryItems, setSelectedInventoryItems] = React.useState(null)
  const [date, setDate] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllInventoryItems GET request from lib
        const { data } = await getAllInventoryItems()
        setInventoryItems(data)
        setSelectedInventoryItems(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  console.log(inventoryItems)

  const filterInventoryItems = (filterDate, search) => {
    setSelectedInventoryItems(inventoryItems.filter(inventoryItem => {
      if (!filterDate && inventoryItem.item.name.toLowerCase().includes(search.toLowerCase())) {
        return inventoryItem
      } 
      console.log('item date:',inventoryItem.expiryDate.slice(0,10))
      console.log('filter date:',filterDate)
      console.log(inventoryItem.item.name.toLowerCase().includes(search.toLowerCase()))
      console.log('name:',inventoryItem.item.name.toLowerCase())
      return filterDate && ((inventoryItem.expiryDate.slice(0,10)) < filterDate) || (inventoryItem.expiryDate.slice(0,10) === filterDate) && inventoryItem.item.name.toLowerCase().includes(search.toLowerCase())
    }))
  }

  const searchTyping = (e) => {
    setSearchValue(e.target.value)
    filterInventoryItems(date, e.target.value)
    console.log(e.target.value)
  }

  const dateSelected = (e) => {
    setDate(e.target.value)
    filterInventoryItems(e.target.value, searchValue)
    console.log(e.target.value)
  }

  return (
    <>
      <h1 className="title is-1 has-text-centered mt-6">My Items</h1>
      <input type="search" onKeyUp={searchTyping}></input>
      <label className="label">Expiry Date:</label>
      <input
        className="input"
        id="expiryDate"
        type="date"
        name="expiryDate"
        min={`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + (new Date().getDate())).slice(-2)}`}
        onChange={dateSelected}
      />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-justify-content-space-evenly is-centered">
            {selectedInventoryItems ? (
              selectedInventoryItems.map(item => ( 
                <InventoryItemCard
                  key={item._id} 
                  name={item.item.name}
                  category={item.item.category}
                  icon={item.item.icon}
                  id={item._id}
                  quantity={item.quantity}
                  expiryDate={item.expiryDate}
                  shareStatus={item.isShared}
                />
              ))
            ) : (
              <p>...Loading</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default InventoryItems