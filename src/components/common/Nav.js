import React from 'react'
import { Link ,useHistory, useLocation  } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../lib/auth'

function Nav() {
  const history = useHistory()
  const location = useLocation()
  const [isOpen, setIsOpen] = React.useState(false)
  const isLoggedIn = isAuthenticated()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])


  
  return  (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
          Home 
          </Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/recipes" className="navbar-item">
              Recipes
            </Link>
            {isLoggedIn && <Link to="/personalisedrecipes" className="navbar-item">
            Recipefinder
            </Link>}
            {isLoggedIn && <Link to="/items" className="navbar-item">
            Items
            </Link>}
            {isLoggedIn && <Link to="/inventoryitems" className="navbar-item">
              My Items
            </Link>}
            {isLoggedIn && <Link to="/inventoryitemsmap" className="navbar-item">
            Find Shared Food 
            </Link>}
            
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isLoggedIn ?
                  <>
                    <Link to="/register" className="button is-light">
                  Register
                    </Link>
                    <Link to="/login" className="button is-light">
                  Log In
                    </Link>
                  </>
                  :
                  <button
                    className="button is-light"
                    onClick={handleLogout}
                  >
                  Logout
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
      
