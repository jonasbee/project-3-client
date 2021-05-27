import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Home from './components/common/Home'
import SharedItemsMap from './components/common/SharedItemsMap'
// import InventoryItems from './components/items/InventoryItems'
// import UserRecipes from './components/items/Recipes'
import Nav from './components/common/Nav'



function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inventoryitemsmap" component={SharedItemsMap} />
        {/* <Route path='/:userId/recipes' component={UserRecipes} />
     // <Route path='/:userId/items' component={InventoryItems} /> */}
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  )
}
export default App
