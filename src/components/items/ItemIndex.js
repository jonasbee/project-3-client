import React from 'react'
import { getAllItems } from '../../lib/api'
import ItemCard from './ItemCard'

function ItemIndex () {
  const [item, setItem] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? getAllItems get request from lib
        const { data } = await getAllItems()
        setItem(data)
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
          {item ? (
            item.map(item => (
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