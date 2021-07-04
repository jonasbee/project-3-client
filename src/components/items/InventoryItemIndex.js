import React from 'react'
import { getAllInventoryItems } from '../../lib/api'
import InventoryItemCard from './InventoryItemCard'

function InventoryItems() {
  const [inventoryItems, setInventoryItems] = React.useState([])
  const [filterValues, setFilterValues] = React.useState({
    searchValue: '',
    dateExpiry: null,
  })
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllInventoryItems GET request from lib
        const { data } = await getAllInventoryItems()
        setInventoryItems(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  const renderedItems = inventoryItems
    .filter((inventoryItem) => inventoryItem.item.name.toLowerCase().includes(filterValues.searchValue.toLowerCase()))
    .filter((inventoryItem) => (((inventoryItem.expiryDate.slice(0, 10)) < filterValues.dateExpiry) || (inventoryItem.expiryDate.slice(0, 10) === filterValues.dateExpiry) || (!filterValues.dateExpiry)))

  return (
    <>
      <h1 className="title is-1 has-text-centered mt-6">My Items</h1>
      <div className="columns is-centered mt-4">
        <div className="field is-horizontal column is-half">
          <div className="field-label is-normal">
            <label className="label">Search Item:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="search" 
                  placeholder="e.g. tomato" 
                  onKeyUp={(e) => setFilterValues({ ...filterValues, searchValue: e.target.value })}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered mt-4">
        <div className="field is-horizontal column is-half">
          <div className="field-label is-normal">
            <label className="label">Expiry Date:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input 
                  className="input"
                  id="expiryDate"
                  type="date"
                  name="expiryDate"
                  min={`${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)}-${('0' + (new Date().getDate())).slice(-2)}`}
                  onChange={(e) => setFilterValues({ ...filterValues, dateExpiry: e.target.value })}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-justify-content-space-evenly is-centered">
            {inventoryItems ? (
              renderedItems.map(item => (
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