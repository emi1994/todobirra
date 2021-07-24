import './App.css'
import Navigation from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState(0)
  return (
    <>
      <Router>
        <Navigation cart={cart} />
        <Switch>
          <Route path='/bebidas'>
            <ItemListContainer cart={cart} setCart={setCart} />
          </Route>
          <Route path='/item-details'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
