import React from 'react'
import { useHistory } from 'react-router'
import { register } from '../../lib/api'
import { useForm } from '../../hooks/useForm'
import  Hero  from '../../assest/hero.jpg'


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
    region: '',
    country: '',
    preference: '',
    coordinates: [],
  })

  // const [isError, setIsError] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await register(formdata)
      history.push('/login')
    } catch (err) {
      // ! Set to BE api errors
      console.log('BE Errors: ', err.response.data.message)
      // if (err.response.data.message === 'Address not found') {
      //   setFormErrors(err.response.data.errors)
      //   // setIsError(true)
      // }
      setFormErrors(err.response.data.errors)

      console.log(err)

    }
  }
  
  console.log(formErrors)

  return (
    <div classNames="hero " style={{ backgroundImage: `url(${Hero})` }}>
      <section className="section">
        <div className="container">
          <div className="columns">
            <form className="column is-half is-offset-one-quarter"
              onSubmit={handleSubmit}>
              <div className="field">
                <label className="label" htmlFor="username">
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
                <label className="label" htmlFor="email">
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
                <label className="label" htmlFor="password">
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
                <label className="label" htmlFor="passwordConfirmation">
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
                <h4 className="title is-4">Address Details</h4>
                {/* {isError && <small className="help is-danger">Your address has not been recognised. Please enter a valid address.</small>} */}
                <br />
                <div className="field">
                  <label className="label" htmlFor="postalCode">
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
                  <label className="label" htmlFor="city">
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
                  <label className="label" htmlFor="street">
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
                  <label className="label" htmlFor="streetNo">
                  Street Number
                  </label>
                  <div >
                    <input
                      className={`input ${formErrors.streetNo ? 'is-danger' : ''}`}
                      name="streetNo" id="streetNo"
                      type="streetNo"
                      onChange={handleChange}
                      placeholder="Street number"
                    />
                  </div>
                  {formErrors.streetNo && (
                    <small className="help is-danger">{formErrors.streetNo}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label" htmlFor="region">
                  State
                  </label>
                  <div >
                    <input
                      className={`input ${formErrors.region ? 'is-danger' : ''}`}
                      name="region" id="region"
                      type="region"
                      onChange={handleChange}
                      placeholder="State"
                    />
                  </div>
                  {formErrors.region && (
                    <small className="help is-danger">{formErrors.region}</small>
                  )}
                </div>
                <div className="field">
                  <label className="label" htmlFor="country">
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
                <label className="label" htmlFor="preference">
                Food preference
                </label>
                <div className="control">
                  <input
                    className="input"
                    name="preference" id="preference"
                    type="preference"
                    onChange={handleChange}
                    placeholder="Food preference"
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-grey-darker">Register Me!</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Register