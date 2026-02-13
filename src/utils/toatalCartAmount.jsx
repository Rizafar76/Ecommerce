
const TotalCartAmount = (cart) => {
    return cart.length > 0 ? cart.reduce((acc, item) => acc + item.price, 0) : 0;
}

export default TotalCartAmount;