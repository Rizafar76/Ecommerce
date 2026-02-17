import { useCart } from "../../customHooks/useCart";
import TotalCartAmount from "../../utils/toatalCartAmount";

const PriceDetails = () => {
    const { cart } = useCart();
    const totalCartAmount = TotalCartAmount(cart);
    const discount = totalCartAmount * 0.1;
    const delivery = totalCartAmount > 500 ? 0 : 40;
    const finalPrice = totalCartAmount - discount + delivery;

    return (
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Order Summary</h3>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-600">
                    <span className="font-medium">Price ({cart.length} items)</span>
                    <span className="font-bold text-slate-900">Rs. {totalCartAmount}</span>
                </div>
                <div className="flex justify-between text-green-600">
                    <span className="font-medium">Discount (10%)</span>
                    <span className="font-bold">- Rs. {discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                    <span className="font-medium">Delivery Charges</span>
                    <span className="font-bold text-slate-900">
                        {delivery === 0 ? <span className="text-green-600">FREE</span> : `Rs. ${delivery}`}
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-slate-100 mb-8">
                <span className="text-lg font-bold text-slate-900">Total Amount</span>
                <span className="text-2xl font-black text-blue-900">Rs. {finalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full premium-button bg-blue-900 shadow-lg shadow-blue-900/20">
                <span className="material-symbols-outlined">lock</span>
                Proceed to Checkout
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">
                100% Satisfaction Guaranteed
            </p>
        </div>
    )
}

export default PriceDetails;