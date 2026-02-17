import { useCart } from "../../customHooks/useCart";
import { findProductInCart } from "../../utils/findProductInCart";

const HorizontalProductCard = ({ product }) => {
    const { cart, cartDispatch } = useCart();
    const isProductInCart = findProductInCart(cart, product.id);

    const removeFromCart = (productId) => {
        if (isProductInCart === true) {
            cartDispatch({
                type: "REMOVE_FROM_CART",
                payload: { productId }
            })
        }
    }

    return (
        <div className="premium-card flex flex-col md:flex-row gap-6 p-4 border-none shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full md:w-48 aspect-square rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                    className="w-full h-full object-cover"
                    src={product.images[0]}
                    alt={product.title}
                    onError={(e) => { e.target.src = "https://picsum.photos/400/400"; }}
                />
            </div>

            <div className="flex flex-col flex-grow justify-between py-1">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-1">{product.category.name}</p>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight">{product.title}</h3>
                        </div>
                        <p className="text-xl font-bold text-slate-900">Rs. {product.price}</p>
                    </div>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-4">{product.description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 transition-colors"
                    >
                        <span className="material-symbols-outlined !text-lg">delete</span>
                        Remove
                    </button>
                    <button className="text-sm font-bold text-slate-600 hover:text-blue-900 flex items-center gap-1.5 transition-colors">
                        <span className="material-symbols-outlined !text-lg">favorite</span>
                        Move to Wishlist
                    </button>

                    <div className="ml-auto flex items-center gap-3 bg-slate-100 p-1 rounded-lg">
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md transition-all">-</button>
                        <span className="font-bold text-slate-900 w-4 text-center">1</span>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md transition-all">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalProductCard;