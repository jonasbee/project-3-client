import React from 'react'
import { useHistory } from 'react-router'
import { register } from '../../lib/api'

function Register() {
  const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    postalCode: '',
    city: '',
    street: '',
    streetNo: '',
    region: '',
    country: '',
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
      const res = await register(formdata)
      console.log(res)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }

    alert(`Submitting form ${JSON.stringify(formdata, null, 2)}`)
  }


  return (
    <section lassName="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter"
            onSubmit={handleSubmit}>
            <div className="field">
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
                  onChange={handleChange} />
              </div>
              
              <div >
                <label htmlFor="postalCode">
                Post Code 
                </label>
                <div >
                  <input 
                    name="postalCode" id="postalCode"
                    type="postalCode"
                    onChange={handleChange}
                    placeholder="Post Code" />
                </div>
              </div>
              <div >
                <label htmlFor="city">
                City
                </label>
                <div >
                  <input 
                    name="city" id="city"
                    type="city"
                    onChange={handleChange}
                    placeholder="City" />
                </div>
              </div>
              <div >
                <label htmlFor="street">
                Street
                </label>
                <div >
                  <input 
                    name="street" id="street"
                    type="street"
                    onChange={handleChange}
                    placeholder="Street" />
                </div>
              </div>
              <div >
                <label htmlFor="password">
                Street Number
                </label>
                <div >
                  <input 
                    name="streetNo" id="streetNo"
                    type="streetNo"
                    onChange={handleChange}
                    placeholder="street number" />
                </div>
              </div>
              <div >
                <label htmlFor="region">
                Region
                </label>
                <div >
                  <input 
                    name="region" id="region"
                    type="region"
                    onChange={handleChange}
                    placeholder="Region" />
                </div>
              </div>
              <div >
                <label htmlFor="password">
                Country
                </label>
                <div >
                  <input 
                    name="country" id="country"
                    type="country"
                    onChange={handleChange}
                    placeholder="Country" />
                </div>
              </div>
              <div >
                <label htmlFor="region">
                Food preference
                </label>
                <div >
                  <input 
                    name="preference" id="preference"
                    type="preference"
                    onChange={handleChange}
                    placeholder="Food preferences" />
                </div>
              </div>
              <div ></div>
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