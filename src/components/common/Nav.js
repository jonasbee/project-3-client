import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav >
      <div >
        <div >
          <Link to="/" >
            Home
          </Link>
          <Link to="/inventoryItems" >
            InventoryItems
          </Link>
          <Link to="/sharedItems" >
            SharedItems
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
