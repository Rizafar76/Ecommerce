import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { getAllProducts } from '../../api/getAllProducts';
import { ProductCard } from '../../components/ProductCard';
import { useCart } from '../../customHooks/useCart';
import getAllCategories from '../../api/getAllCategories';
import GetProductsByCategory from '../../utils/getProductsByCategory';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const[categoryName, setCategoryName] = useState("All");
  // const [filteredProducts, setFilteredProducts] = useState("All");
  const { cart } = useCart();

  console.log(cart);
  console.log(categoryName);
  console.log(categories);

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      const categories = await getAllCategories();
      setCategories(categories);
      setProducts(products);
    })();

  }, []);

  const uniqueCategories = new Set(products.map((product) => product.category.name));
  uniqueCategories.add("All");
  console.log(uniqueCategories);

  const onCategoryClick = (categoryName) => {
    setCategoryName(categoryName);
  }

  const filteredByProducts = GetProductsByCategory(products, categoryName);

  return (
    <>
      <Navbar />
      <main className='pt-8'>
        <div className='flex gap-4 justify-center mb-4'>
          {
            [...uniqueCategories].map((categoryName) => <div key={categoryName} className='text-lg font-semibold rounded-full p-1 hover:cursor-pointer' onClick={() => onCategoryClick(categoryName)}>{categoryName}</div>)
          }
        </div>
        <div className='flex flex-wrap gap-8 justify-center'>
          {
            filteredByProducts?.length > 0 ? filteredByProducts.map((product) => <ProductCard key={product.id} product={product} />) : <p className='text-center text-2xl mt-4'>No Products Found</p>
          }
        </div>

      </main>
    </>
  );
}

export default Home;