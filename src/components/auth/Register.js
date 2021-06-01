import React from 'react'
import { useHistory } from 'react-router'
import { register } from '../../lib/api'
import { useForm } from '../../hooks/useForm'
import Hero from '../../assest/hero.jpg'

function Register() {
  const history = useHistory()
  const { formdata, formErrors, handleChange, setFormErrors } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    postalCode: '',
    city: '',
    street: '',
    streetNo: '',
    country: '',
    preference: '',
    coordinates: '',
  })
  // const [isInvalidAddress, setInvalidAddress] = React.useState(false)

  // const [isError, setIsError] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await register(formdata)
      history.push('/login')
    } catch (err) {
      // ! Set to BE api errors
      console.log(err)
      console.log('BE Errors: ', err.response.data.message)
      console.log(err.response.data)
      console.log(err)
      setFormErrors(err.response.data.errors)
      // if (err.response.data.errors.coordinates.length === 0) {
      //   setInvalidAddress(true)
      // }
    }
  }

  // if (err.response.data.message === 'Address not found') { 
  //   setFormErrors({ coordinates: 'Path not found' })
  //   setIsError(true)
  // } else {
  //   setFormErrors(err.response.data.errors)
  // }

  console.log(formErrors)

  return (
    <div className="hero" style={{ backgroundImage: `url(${Hero})`, backgroundSize: 'cover' }}>
      <section className="section">
        <div className="container ">
          <div className="columns">
            <form className="column is-half is-offset-one-quarter"
              onSubmit={handleSubmit}>
              <h4 className="title is-4 has-text-white">Account Details</h4>
              <div className="field">
                <label className="label has-text-white" htmlFor="username">
                  Username
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.username ? 'is-danger' : ''}`}
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </div>
                {formErrors.username && (
                  <small className="help is-danger">{formErrors.username}</small>
                )}
              </div>
              <div className="field">
                <label className="label has-text-white" htmlFor="email">
                  Email
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.email ? 'is-danger' : ''}`}
                    name="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                {formErrors.email && (
                  <small className="help is-danger">{formErrors.email}</small>
                )}
              </div>
              <div className="field">
                <label className="label has-text-white" htmlFor="password">
                  Password
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.password ? 'is-danger' : ''}`}
                    name="password" id="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Passord"
                  />
                </div>
                {formErrors.password && (
                  <small className="help is-danger">{formErrors.password}</small>
                )}
              </div>
              <div className="field">
                <label className="label has-text-white" htmlFor="passwordConfirmation">
                  Password Confirmation
                </label>
                <div >
                  <input
                    className={`input ${formErrors.passwordConfirmation ? 'is-danger' : ''}`}
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Password Conformation"
                    onChange={handleChange}
                  />
                </div>
                {formErrors.passwordConfirmation &&
                  <small className="help is-danger">
                    {formErrors.passwordConfirmation}
                  </small>
                }
              </div>
              {/* // ? Address details */}
              <br />
              <section>
                <h4 className="title is-4 has-text-white">Address Details</h4>
                {(formErrors.coordinates) && <small className="help is-danger">Your address has not been recognised. Please enter a valid address.</small>}
                <br />
                <div className="field">
                  <label className="label has-text-white" htmlFor="postalCode">
                    Post Code
                  </label>
                  <div >
                    <input
                      className={`input ${formErrors.postalCode ? 'is-danger' : ''}`}
                      name="postalCode"
                      id="postalCode"
                      type="postalCode"
                      onChange={handleChange}
                      placeholder="e.g. SW1A 2AA"
                    />
                  </div>
                  {formErrors.postalCode && (
                    <small className="help is-danger">{formErrors.postalCode}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label has-text-white" htmlFor="city">
                    City
                  </label>
                  <div >
                    <input
                      className={`input ${formErrors.city ? 'is-danger' : ''}`}
                      name="city" id="city"
                      type="city"
                      onChange={handleChange}
                      placeholder="City" />
                  </div>
                  {formErrors.city && (
                    <small className="help is-danger">{formErrors.city}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label has-text-white" htmlFor="street">
                    Street
                  </label>
                  <div >
                    <input
                      className={`input ${formErrors.street ? 'is-danger' : ''}`}
                      name="street" id="street"
                      type="street"
                      onChange={handleChange}
                      placeholder="Street"
                    />
                  </div>
                  {formErrors.street && (
                    <small className="help is-danger">{formErrors.street}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label has-text-white" htmlFor="streetNo">
                    Street Number
                  </label>
                  <div >
                    <input
                      className={`input ${formErrors.streetNo ? 'is-danger' : ''}`}
                      name="streetNo" id="streetNo"
                      type="streetNo"
                      onChange={handleChange}
                      placeholder="Street Number"
                    />
                  </div>
                  {formErrors.streetNo && (
                    <small className="help is-danger">{formErrors.streetNo}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label has-text-white" htmlFor="country">
                    Country
                  </label>
                  <div className="control">
                    <input
                      className={`input ${formErrors.country ? 'is-danger' : ''}`}
                      name="country" id="country"
                      type="country"
                      onChange={handleChange}
                      placeholder="Country"
                    />
                  </div>
                  {formErrors.country && (
                    <small className="help is-danger">{formErrors.country}</small>
                  )}
                </div>
              </section>
              <br />
              <div className="field">
                <label className="label has-text-white" htmlFor="preference">
                  Food Preference
                </label>
                <div className="control">
                  <input
                    className={`input ${formErrors.preference ? 'is-danger' : ''}`}
                    name="preference" id="preference"
                    type="preference"
                    onChange={handleChange}
                    placeholder="Food Preference"
                  />
                </div>
                {formErrors.preference && (
                  <small className="help is-danger">Choose from: vegan, vegetarian, pescetarian</small>
                )}
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-dark">Register Me!</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Register