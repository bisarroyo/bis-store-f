import { useEffect, useState } from 'react'

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, props.images)
  }
  return (
    <div className='carousel-container'>
      <div className='carousel-img-container'>
        <img
          src={`src/assets/carousel/${selectedImage}`}
          alt='Gentleman'
          className={loaded ? 'loaded' : ''}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className='carousel-button-container'>
        {props.showButtons
          ? (
            <>
              <button onClick={previous}>{'<'}</button>
              <button onClick={next}>{'>'}</button>
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
