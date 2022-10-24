import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs'

const Item = ({ title, image, description, price }) => {
  return (
    <div className='item-container'>
      <h5>{title}</h5>
      <div className='item-img'>
        <img src={image} alt='Test image' />
      </div>
      <div className='item-description'>
        <p>{description}</p>
      </div>
      <div className='item-info'>
        <p>{price} <span>$</span></p>
        <div className='item-cart'>
          <BsCartPlusFill />
        </div>
      </div>
    </div>
  )
}

export default Item
