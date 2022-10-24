import Carousel from '../containers/Carousel'
import Item from '../containers/Item'
import { useFetchProducts } from '../Hooks/useFetchProducts'

const Home = () => {
  const { product } = useFetchProducts()
  const images = ['space-1.jpg', 'space-2.jpg', 'space-3.jpg']
  return (
    <>
      <Carousel images={images} autoPlay={false} showButtons />;
      <div className='home-products flex-fluid'>
        {product?.map((item) => (
          <Item
            key={item.id}
            {...item}
          />
        ))}

      </div>
    </>
  )
}

export default Home
