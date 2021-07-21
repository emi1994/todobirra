import React from 'react'
import Item from '../Item/Item'
import database from '../../productsDB.json'

const ItemList = () => {
    return (
        <div>
            This is the item list component

            <Item database={database}/>
        </div>
    )
}

export default ItemList
