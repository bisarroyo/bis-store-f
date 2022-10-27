import Carousel from '../containers/Carousel'
import Item from '../containers/Item'

import { useFetchProducts } from '../Hooks/useFetchProducts'

const Home = () => {
  const { product, load } = useFetchProducts()
  return (
    <>
      <Carousel autoPlay showButtons />;
      <div className='home-products flex-row'>
        {product?.map((item) => (
          <Item
            key={item.id}
            {...item}
            onLoading={load}
          />
        ))}

      </div>
    </>
  )
}

export default Home
