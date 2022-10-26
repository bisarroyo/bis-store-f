import Carousel from '../containers/Carousel'
import Item from '../containers/Item'
import { useFetchProducts } from '../Hooks/useFetchProducts'

const Home = () => {
  const { product } = useFetchProducts()
  return (
    <>
      <Carousel autoPlay={false} showButtons />;
      <div className='home-products flex-row'>
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
