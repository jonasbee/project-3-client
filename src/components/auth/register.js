import React from 'react'
import { useHistory } from 'react-router'
import { registerUser } from '../../lib/api'

function Register() {
  const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    addressDetails: {
      postalCode: '',
      city: '',
      street: '',
      streetNo: '',
      region: '',
      country: '',
    },
    preference: '',
  }

  )

  const handleChange = (e) => {
    console.log(e.target.name)
    setFormdata({ ...formdata, [e.target.name]: e.target.value })

  }
  console.log(formdata)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await registerUser(formdata)
      console.log(res)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }

    // alert(`Submitting form ${JSON.stringify(formdata, null, 2)}`)
  }

  return (
    <section >
      <div >
        <div >
          <form 
            onSubmit={handleSubmit}>
            <div >
              <label  htmlFor="username">
                Username
              </label>
              <div >
                <input
                  
                  name="username"
                  id="username"
                  onChange={handleChange}
                  placeholder="Username" />
              </div>
            </div>
            <div >
              <label  htmlFor="email">
                Email
              </label>
              <div >
                <input 
                  name="email" 
                  id="email"
                  onChange={handleChange}
                  placeholder="Email" />
              </div>
            </div>
            <div >
              <label htmlFor="password">
                Password
              </label>
              <div >
                <input 
                  name="password" id="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Passord" />
              </div>
            </div>
            <div >
              <label  htmlFor="passwordConfirmation">
                Password Confirmation
              </label>
              <div >
                <input 
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  type="password"
                  placeholder="Password Conformation"
                  onChange={handleChange}/>
              </div>
              
            </div>
            <div >
              <button type="submit" >Register Me!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Register