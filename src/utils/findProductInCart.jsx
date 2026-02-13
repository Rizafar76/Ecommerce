export const findProductInCart = (cart, productId) => cart?.length > 0 && cart.some((item) => item.id === productId) 
