import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import ItemIndex from './components/items/ItemIndex'
import RecipeIndex from './components/items/RecipeIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import InventoryItemIndex from './components/items/InventoryItemIndex'
import SharedItemsMap from './components/common/SharedItemsMap'
// import UserRecipes from './components/items/UserRecipes'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items' component={ItemIndex} />
        <Route path='/recipes' component={RecipeIndex} />
        <Route path='/register' component={Register} /> 
        <Route path='/login' component={Login} />
        <Route path='/inventoryitems' component={InventoryItemIndex} />
        <Route path='/inventoryitemsmap' component={SharedItemsMap} />
        {/* <Route path='/:userId/recipes' component={UserRecipes} /> */}
      </Switch>
    </Router>
  )
}

export default App
