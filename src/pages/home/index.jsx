import React,{useEffect,useState} from 'react';
import  Navbar  from '../../components/Navbar';
import { getAllProducts } from '../../api/getAllProducts';
import { ProductCard } from '../../components/ProductCard';
import { useCart } from '../../customHooks/useCart';

const Home = () => {

  const [products, setProducts] = useState([]);
  const { cart } = useCart();
  console.log(cart);

  useEffect(() => {
    (async () =>{
      const data = await getAllProducts();
      setProducts(data);
    })();

  },[]);

  return (
    <>
      <Navbar />
      <main className='flex flex-wrap gap-8 justify-center mt-8 py-8'>
        {
          products.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : <p className='text-center text-2xl mt-4'>No Products Found</p>
        }
      </main>
    </>
  );
}

export default Home;