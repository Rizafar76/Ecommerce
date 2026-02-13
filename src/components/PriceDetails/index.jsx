import { useCart } from "../../customHooks/useCart";
import TotalCartAmount from "../../utils/toatalCartAmount";
const PriceDetails = () => {

    const { cart } = useCart();

    const totalCartAmount = TotalCartAmount(cart);

    return (
        <div className="w-[400px] bg-[#fafafa] p-4">
            <p className="text-2xl border-b p-2">Price Details</p>
            <div className="flex flex-col gap-2 border-b p-2">
                <p>Total Items  -  {cart.length}</p>
                <p>Total Price  -  Rs. {totalCartAmount}</p>
            </div>
            <div className="flex flex-col gap-2 border-b p-2">
                <p>Discount Price  -  Rs. {totalCartAmount * 0.1}</p>
                <p>Final Price  -  Rs. {totalCartAmount - totalCartAmount * 0.1}</p>
            </div>
            <div className="p-2">
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">Place Order</button>
            </div>      
        </div>
    )
}

export default PriceDetails;