import React from 'react'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'

const ItemList = ({ database, cart, setCart }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setTimeout(() => {
      const databasePromise = new Promise((resolve, reject) => {
        let status = 200
        if (status === 200) {
          resolve(database)
        } else {
          reject('error loading database')
        }
      })

      databasePromise
        .then((response) => {
          return response
        })
        .catch((error) => {
          return error
        })

      const getDatabase = () => {
        return databasePromise
      }

      getDatabase()
        .then((response) => {
          setProducts(response)
        })
        .catch((error) => {
          return error
        })
    }, 1000)
  }, [database])

  return (
    <>
      This is the item list component
      <Row className='justify-content-center'>
        {products.map((producto) => (
          <Item
            key={producto.id}
            nombre={producto.name}
            descripcion={producto.description}
            precio={producto.price}
            imagen={producto.image}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </Row>
    </>
  )
}

export default ItemList
