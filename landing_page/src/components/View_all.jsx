import React from 'react'
import Product_display_cards from './Product_display_cards'

const View_all = ({api}) => {
  return (
    <div>
      {api.map( x => <Product_display_cards category={x}/>)}
    </div>
  )
}

export default View_all;
