import { useEffect, useState } from 'react'

export const useCarousel = (images, autoPlay, showButtons) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, 3000)
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

  const action = {
    previous: () => {
      selectNewImage(selectedIndex, images, false)
    },
    next: () => {
      selectNewImage(selectedIndex, images)
    }
  }

  return {
    image: images[selectedIndex],
    previous: action.previous,
    next: action.next,
    loaded,
    setLoaded
  }
}
