import { BsCartPlusFill } from 'react-icons/bs'
import Loader from './Loader'

const Item = ({ title, image, description, price, onLoading }) => {
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
      <Loader />
    </div>
  )
}

export default Item
