import React from 'react'
import { getAllItems } from '../../lib/api'
import ItemCard from './ItemCard'

function ItemIndex() {
  const [items, setItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllItems GET request from lib
        const { data } = await getAllItems()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    getData()
  }, [])

  const filteredItems = items
    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <>
      <h1 className="title is-1 has-text-centered mt-6">Items</h1>
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
                  onKeyUp={(e) => setSearchValue(e.target.value)}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className='section'>
        <div className='container'>
          <div className="columns is-multiline is-justify-content-space-evenly is-centered">
            {items ? (
              filteredItems.map(item => (
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