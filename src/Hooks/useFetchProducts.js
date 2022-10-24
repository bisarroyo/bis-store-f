import { useState, useEffect } from 'react'
import { getProducts } from '../helpers/getProducts'

export const useFetchProducts = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const getProductList = async () => {
    try {
      const newProducts = await getProducts()
      setProduct(newProducts)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProductList()
  }, [])

  return {
    product,
    loading
  }
}
