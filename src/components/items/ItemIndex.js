import React from 'react'
import { getAllItems } from '../../lib/api'
import ItemCard from './ItemCard'
// import { useForm } from '../../hooks/useForm'
// import { useHistory } from 'react-router'
// import { inventoryItem } from '../../lib/api'

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

  // function InventoryItem(){
  //   const history = useHistory()
  //   const [isError, setIsError] = React.useState(false)
  //   const { formdata, handleChange } = useForm({
  //     quantity: '',
  //     expiryDate: '',
  //   })

  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //     await inventoryItem(formdata)
  //     history.push('/inventoryitems')
  //   } catch (err) {
  //     // ! Set to BE api errors
  //     console.log('BE Errors: ', err.response.data.errors)
  //     setFormErrors(err.response.data.errors)
  //   }
  // }

  // const handleFocus = () => {
  //   setIsError(false)
  // }




  return (
    <>
      <h1 className="title is-1 has-text-centered">Inventory Items</h1>
      <section className='section'>
        <div className='container '>
          <div className="columns is-multiline is-justify-content-space-evenly is-centered">
            {items ? (
              items.map(item => (
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