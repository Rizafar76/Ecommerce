import { useCart } from "../../customHooks/useCart";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ product }) => {

    const { cart, cartDispatch } = useCart();
    const navigate = useNavigate();

    const isProductInCart = findProductInCart(cart, product.id);

    const addCart = (product) => {
        !isProductInCart ?
        cartDispatch({
            type: "ADD_TO_CART",
            payload: { product }
        }) : 
        navigate("/cart");
    }

    return (
        <div className="card card-vertical d-flex direction-column relative">
            <div className="card-image-container relative">
                <img className="card-" src={product.images[0]} alt="card" onError={(e) => {
                    e.target.src = "https://picsum.photos/640/480";
                }} />
                <small className="c-badge bg-primary absolute left-0">Trending</small>
            </div>
            <div className="card-details">
                <div className="card-title">{product.title}</div>
                <div className="card-des">
                    <p className="card-des">{product.description.slice(0, 100)}</p>
                    <p className="card-price">Rs. {product.price} </p>
                </div>
                <div className="cta-btn">
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span className="material-symbols-outlined">
                            favorite
                        </span> Add To Wishlist
                    </button>

                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={() => addCart(product)}>
                        <span className="material-symbols-outlined">
                            {
                                isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'
                            }
                            
                        </span>
                        {
                            isProductInCart ? 'Go To Cart' : 'Add To Cart'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}