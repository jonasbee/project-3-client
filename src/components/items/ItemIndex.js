import React from 'react'
import { getAllItems } from '../../lib/api'
import ItemCard from './ItemCard'

function ItemIndex () {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllItems GET request from lib
        const { data } = await getAllItems()
        setItems(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <section className='section'>
      <div className='container'>
        <div className="columns is-multiline">
          {items ? (
            items.map(item => (
              <ItemCard 
                key={item._id} 
                name={item.name} 
                category={item.category} 
                icon={item.icon}
              />))
          ) : (
            <p>...Loading</p>
          )}
        </div>
      </div>
    </section>
  )

}

export default ItemIndex