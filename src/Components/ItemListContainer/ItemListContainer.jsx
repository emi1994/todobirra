import React from 'react'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import getItems from '../../services/mockItems'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()
  console.log(categoryId)

  useEffect(() => {
    getItems.then((response) => {
      if (categoryId === undefined) {
        setProducts(response)
      } else {
        setProducts(response.filter((res) => res.category === categoryId))
      }
    })
  }, [categoryId])

  return (
    <Container fluid className='text-center'>
      <ItemList products={products} />
    </Container>
  )
}

export default ItemListContainer
