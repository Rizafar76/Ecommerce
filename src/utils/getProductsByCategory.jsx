

const GetProductsByCategory = (products, categoryName) => {
    const filteredProducts = categoryName === "All" ? products :  products.filter((product) => product.category.name.toLowerCase() === categoryName.toLowerCase()) ;
    return filteredProducts;
}

export default GetProductsByCategory;