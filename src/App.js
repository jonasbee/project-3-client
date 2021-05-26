import React from 'react'

import ItemIndex from './components/items/ItemIndex'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items' component={ItemIndex} />
        {/* <Route path='/sharedItems' component={SharedItemsMap} /> */}
        {/* <Route path='/:userId/recipes' component={UserRecipes} />
      // <Route path='/:userId/items' component={InventoryItems} /> */}
        {/* <Route path='/register' component={Register} /> */}
        {/* <Route path='/login' component={Login} /> */}
      </Switch>
    </Router>
  )
}

export default App
