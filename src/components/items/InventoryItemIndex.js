import React from 'react'
import { getAllInventoryItems } from '../../lib/api'
import InventoryItemCard from './InventoryItemCard'

function InventoryItems() {
  const [inventoryItems, setInventoryItems] = React.useState([])

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

  console.log(inventoryItems)

  return (
    <>
      <h1>Personalised Inventory Items</h1>
      <section className='section'>
        <div className='container'>
          <div className="columns is-multiline">
            {inventoryItems ? (
              inventoryItems.map(item => ( 
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