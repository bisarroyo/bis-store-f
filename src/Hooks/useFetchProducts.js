import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loading, products } from '../reducers'
import { getProducts } from '../helpers/getProducts'

export const useFetchProducts = () => {
  // const [product, setProduct] = useState([])
  // const [loading, setLoading] = useState(true)

  const product = useSelector((state) => state.items.productsData)
  const load = useSelector((state) => state.items.isLoading)
  const dispatch = useDispatch()

  const getProductList = async () => {
    try {
      const newProducts = await getProducts()
      // end of load it sets in false
      dispatch(loading(false))
      dispatch(products(newProducts))
      // setProduct(newProducts)
      // setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // set state in true because is loading
    dispatch(loading(true))
    getProductList()
  }, [])

  return {
    product,
    load
  }
}
