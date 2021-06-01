import React from 'react'
import { getAllItems } from '../../lib/api'
import ItemCard from './ItemCard'
// import { useForm } from '../../hooks/useForm'
// import { useHistory } from 'react-router'
// import { inventoryItem } from '../../lib/api'

function ItemIndex () {
  const [items, setItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [selectedItems, setSelectedItems] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllItems GET request from lib
        const { data } = await getAllItems()
        setItems(data)
        setSelectedItems(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  const filterItems = (search) => {
    setSelectedItems(items.filter(item => {
      if (item.name.toLowerCase().includes(search.toLowerCase())) { 
        return item
      }
    }))
  }

  const searchTyping = (e) => {
    setSearchValue(e.target.value)
    filterItems(e.target.value)
  }

  return (
    <>
      <h1 className="title is-1 has-text-centered mt-6">Items</h1>
      <input type="search" onKeyUp={searchTyping}></input>
      <section className='section'>
        <div className='container'>
          <div className="columns is-multiline is-justify-content-space-evenly is-centered">
            {selectedItems ? (
              selectedItems.map(item => (
                <ItemCard 
                  key={item._id} 
                  name={item.name} 
                  category={item.category} 
                  icon={item.icon}
                  id={item._id}
                />))
            ) : (
              <p>...Loading</p>
            )}
          </div>
        </div>
      </section>
    </>
  )

}

export default ItemIndex