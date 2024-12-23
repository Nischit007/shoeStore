import React from 'react'
import SelectedCartItem from './SelectedCartItem'
import EmptyItem from './EmptyItem'

const Bag = ({cart,handleDelete}) => {
  return (
    <>
    {
        cart.length==0?<EmptyItem></EmptyItem>: <SelectedCartItem cart={cart}  handleDelete={handleDelete}/>
    }
  
    </>
  )
}

export default Bag