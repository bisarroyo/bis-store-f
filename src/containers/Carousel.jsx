import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { useCarousel } from '../Hooks/useCarousel'

import img from '../assets/carousel/img-1.jpg'
import img2 from '../assets/carousel/img-2.jpg'
import img3 from '../assets/carousel/img-3.jpg'

const images = [img, img2, img3]

const Carousel = ({ autoPlay, showButtons }) => {
  const { image, previous, next, loaded, setLoaded } = useCarousel(images, autoPlay, showButtons)

  return (
    <div className='carousel-container'>
      <div className='carousel-img-container'>
        <img
          src={image}
          alt='Gentleman'
          className={loaded ? 'loaded' : ''}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className='carousel-button-container'>
        {showButtons
          ? (
            <>
              <button onClick={previous}><AiFillCaretLeft /></button>
              <button onClick={next}><AiFillCaretRight /></button>
            </>
            )
          : (
            <></>
            )}
      </div>
    </div>
  )
}

export default Carousel
