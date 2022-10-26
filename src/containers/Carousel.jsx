import React, { useEffect, useState } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

import img from '../assets/carousel/img-1.jpg'
import img2 from '../assets/carousel/img-2.jpg'
import img3 from '../assets/carousel/img-3.jpg'

const images = [img, img2, img3]

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }

  // const showIcons = () => {
  //   for (let i = 0; i < images.length; i++) {
  //     React.createElement('div', { class: 'icon' }, '')
  //   }
  // }

  return (
    <div className='carousel-container'>
      <div className='carousel-img-container'>
        <img
          src={images[selectedIndex]}
          alt='Gentleman'
          className={loaded ? 'loaded' : ''}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className='carousel-button-container'>
        {props.showButtons
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
      {/* <div id='icons'>{showIcons}</div> */}
    </div>
  )
}

export default Carousel
