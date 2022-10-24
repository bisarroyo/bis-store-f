import axios from 'axios'

export const getProducts = async () => {
  try {
    const URL = 'https://fakestoreapi.com/products'
    const { data } = await axios.get(URL)

    const products = data.map(({ id, title, image, description, price }) => ({
      id,
      title,
      image,
      description,
      price
    }))

    return products
  } catch (err) {
    console.log(err)
  }
}
