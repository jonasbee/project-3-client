import React from 'react'
import { editPersonalisedItem } from '../../lib/api'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'

function  EditPersonalisedItem(id) {
  const { formdata,setFormdata,handleChange } = useForm({
    quantity: '',
  })

  const handleEdit = async () => {
    try {
      await editPersonalisedItem(id, formdata)
      history.go(0)
    } catch (err) {
      console.log(err)
    }
  }
}
return (






)

export default EditPersonalisedItem




const handleNestedChange = (e) => {
  handleChange({ target: { name: 'location', value: {  ...formdata.location, [e.target.name]: e.target.value, } } })
}