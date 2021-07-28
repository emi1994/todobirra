import './App.css'
import Navigation from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/bebidas/'>
            <ItemListContainer />
          </Route>
          <Route
            exact
            component={ItemListContainer}
            path='/category/:categoryId'
          />
          <Route path='/details/:id'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
