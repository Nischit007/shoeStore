import React from 'react'
import MainContent from './MainContent'
import CartList from './CartList'
import CartListItem from './CartListItem'
import ShoeDesign from './ShoeDesign'

const Homepage = ({details,handleOnClick}) => {
  return (
    <>
    <MainContent/>
    <CartList/>
    <CartListItem name={details} handleOnClick={handleOnClick}/>
    <ShoeDesign/>
    </>
  )
}

export default Homepage