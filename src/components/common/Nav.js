import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav >
      <div >
        
        <Link to="/" >
            Home
        </Link>
        <Link to="/inventoryItems" >
            InventoryItems
        </Link>
        <Link to="/inventoryitemsmap" >
            SharedItems
        </Link>
        <Link to="/login" >
            Login
        </Link>
        <Link to="/register" >
            Register
        </Link>
      
      </div>
    </nav>
  )
}

export default Navbar
