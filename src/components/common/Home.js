import React from 'react'
import { login } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import  Hero  from '../../assest/hero.jpg'


function Login () {
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await login(formdata)
      setToken(res.data.token)
      history.push('/items')
    } catch (err) {
      setIsError(true)
    }
  }

  const handleFocus = () => {
    setIsError(false)
  }

  return (
    <div className="hero  " style={{ backgroundImage: `url(${Hero})` }}>
      <section className="hero-body columns">
        <img className="column is-two-thirds ml-5" id="home-picture" src={Hero}/>
        <div className="container column ">
          <div className="column ">
            <form 
              className="column is-two-thirds form ml-6"
              onSubmit={handleSubmit}
            >
              <div className="field ">
                <label className="label ">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    onFocus={handleFocus}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    onFocus={handleFocus}
                    onChange={handleChange}
                  />
                </div>{isError && <small className="help is-danger">Your credentials are incorrect, please check and try again</small>}
              
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-dark">
                Log Me In!
                </button>
              </div>
            </form>
          </div>
        </div> 
      </section>
      
    </div>
  
  )
}

export default Login
