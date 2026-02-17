import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/getAllProducts';
import { ProductCard } from '../../components/ProductCard';
import getAllCategories from '../../api/getAllCategories';
import GetProductsByCategory from '../../utils/getProductsByCategory';
import Layout from '../../components/Layout';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("All");

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      await getAllCategories(); // Keep this if we want to ensure categories are fetched, but we don't need the result here
      setProducts(products);
    })();
  }, []);

  // Filter categories based on whitelist as requested by user
  const uniqueCategories = ["Clothes", "Electronics", "Shoes", "Miscellaneous", "marutbmk", "shana Hilll", "Trinidadac", "All"];

  const allCategoriesFromProducts = new Set(products.map((product) => product.category.name));
  allCategoriesFromProducts.add("All");

  const displayCategories = [...allCategoriesFromProducts].filter(cat => uniqueCategories.includes(cat));

  const onCategoryClick = (categoryName) => {
    setCategoryName(categoryName);
  }

  const filteredByProducts = GetProductsByCategory(products, categoryName);

  return (
    <Layout>
      <section className="mb-12">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900 font-bold tracking-tight">Discover Our Collection</h2>
          <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
            Quality products curated for your daily needs, from fashion to technology.
          </p>
        </div>

        {/* Modern Category Filters */}
        <div className='flex gap-4 justify-center mb-16 flex-wrap px-4'>
          {displayCategories.map((catName) => (
            <button
              key={catName}
              className={`group relative px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 overflow-hidden ${categoryName === catName
                  ? 'text-white scale-105 shadow-xl shadow-blue-900/20'
                  : 'bg-white text-slate-600 hover:text-blue-900 hover:bg-slate-50 border border-slate-100'
                }`}
              onClick={() => onCategoryClick(catName)}
            >
              {categoryName === catName && (
                <span className="absolute inset-0 bg-blue-900 transition-transform duration-300"></span>
              )}

              <span className="relative z-10 flex items-center gap-2">
                {catName}
                {categoryName === catName && (
                  <span className="material-symbols-outlined !text-sm">check_circle</span>
                )}
              </span>
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {filteredByProducts?.length > 0 ? (
            filteredByProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-100">
              <span className="material-symbols-outlined text-7xl text-slate-200 mb-6">inventory_2</span>
              <p className='text-slate-400 text-xl font-medium'>No products found in this category</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Home;