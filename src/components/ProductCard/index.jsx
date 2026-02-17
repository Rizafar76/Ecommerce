import { useCart } from "../../customHooks/useCart";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const { cart, cartDispatch } = useCart();
    const navigate = useNavigate();

    const isProductInCart = findProductInCart(cart, product.id);

    const addCart = (item) => {
        !isProductInCart ?
            cartDispatch({
                type: "ADD_TO_CART",
                payload: { product: item }
            }) :
            navigate("/cart");
    }

    return (
        <div className="premium-card flex flex-col h-full overflow-hidden group">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={product.images[0]}
                    alt={product.title}
                    onError={(e) => { e.target.src = "https://picsum.photos/640/800"; }}
                />
                <div className="absolute top-3 left-3">
                    <span className="bg-blue-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Trending
                    </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-white transition-all duration-200">
                    <span className="material-symbols-outlined !text-xl">favorite</span>
                </button>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-auto">
                    <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-1">{product.category.name}</p>
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1 mb-2 group-hover:text-blue-900 transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4 pb-4 border-b border-slate-50">
                    <p className="text-xl font-bold text-slate-900">
                        <span className="text-sm font-medium text-slate-400 mr-1">Rs.</span>
                        {product.price}
                    </p>
                    <div className="flex items-center gap-1 text-amber-500">
                        <span className="material-symbols-outlined !text-sm">star</span>
                        <span className="text-sm font-bold text-slate-700">4.5</span>
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        className={`w-full premium-button ${isProductInCart ? 'bg-slate-900' : 'bg-blue-900'}`}
                        onClick={() => addCart(product)}
                    >
                        <span className="material-symbols-outlined">
                            {isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'}
                        </span>
                        {isProductInCart ? 'Go To Cart' : 'Add To Cart'}
                    </button>
                </div>
            </div>
        </div>
    )
}
