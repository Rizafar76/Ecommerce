import { createContext,useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";

const CartContext = createContext();

 const CartProvider = ({children}) => {

    const initialState = {
        cart: []
    };
  
    const [{cart},cartDispatch] = useReducer(CartReducer,initialState);

    
    return (
        <CartContext.Provider value={{cart, cartDispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
