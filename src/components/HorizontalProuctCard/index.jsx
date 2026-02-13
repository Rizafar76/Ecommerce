import { useCart } from "../../customHooks/useCart";
import { findProductInCart } from "../../utils/findProductInCart";

const HorizontalProductCard = ({product}) => {

    const { cart,cartDispatch } = useCart();
    const isProductInCart = findProductInCart(cart, product.id);

    const removeFromCart = (productId) => {
        if(isProductInCart === true ) {
        cartDispatch({
            type: "REMOVE_FROM_CART",
            payload: { productId }
        })
    }
    }
    return (
        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src="/assets/shoes.jpg" alt="shoes" />
            </div>
            <div className="card-details d-flex direction-column ">
                <div className="card-title">{product.title}</div>
                <div className="card-description">
                    <p className="card-des">{product.description}</p>
                    <p className="card-price">
                        Rs. {product.price}
                    </p>
                </div>
                <div className="cta-btn">
                    <button onClick={() => removeFromCart(product.id)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        Remove From Cart
                    </button>
                </div>
                 <div className="cta-btn">
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        Move To Wishlist
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HorizontalProductCard;