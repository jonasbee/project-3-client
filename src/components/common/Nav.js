import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        
        <Link to="/" >
            Home
        </Link>
        <Link to="/items" >
            Itmes
        </Link>
        <Link to="/inventoryItems" >
            InventoryItems
        </Link>
        <Link to="/sharedItems" >
            SharedItems
        </Link>
        <Link to="/login" >
            Login
        </Link>
        <Link to="/register" >
            Register
        </Link>
        <Link to="/recipes" >
            Recipes
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
