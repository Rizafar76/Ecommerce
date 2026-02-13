import Navbar from "../../components/Navbar";
import { useCart } from "../../customHooks/useCart";
import HorizontalProductCard from "../../components/HorizontalProuctCard";
import PriceDetails from "../../components/PriceDetails";
import "../../styles/utility.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const goToHome = () => navigate("/");

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

                <h2 className="text-3xl font-bold mb-8">My Cart</h2>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-10 text-center text-xl font-medium">
                        <h2 className="text-3xl">Your cart is empty</h2>
                        <p onClick={goToHome} className="text-[rgb(20 83 45)] underline hover:cursor-pointer">Go to Home Page</p>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className=" flex flex-col gap-6">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
                                >
                                    <HorizontalProductCard product={item} />
                                </div>
                            ))}
                        </div>

                        {/* RIGHT SIDE - Price Summary */}
                        <div className="w-full lg:w-[350px] sticky top-24">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <PriceDetails />
                            </div>
                        </div>

                    </div>
                )}

            </main>
        </div>
    );
};

export default Cart;
