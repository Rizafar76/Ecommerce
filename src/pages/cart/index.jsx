import React from "react";
import { useCart } from "../../customHooks/useCart";
import HorizontalProductCard from "../../components/HorizontalProuctCard";
import PriceDetails from "../../components/PriceDetails";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const Cart = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const goToHome = () => navigate("/");

    return (
        <Layout>
            <div className="max-w-6xl mx-auto py-8">
                <header className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">Your Shopping Cart</h2>
                    <p className="text-slate-500 font-medium">{cart.length} items in your bag</p>
                </header>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-16 text-center max-w-2xl mx-auto">
                        <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-5xl text-slate-300">shopping_cart</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Your cart is feeling light</h3>
                        <p className="text-slate-500 mb-8">Ready to start shopping? We have thousands of products waiting for you.</p>
                        <button
                            onClick={goToHome}
                            className="premium-button bg-blue-900 px-10"
                        >
                            Explore Products
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* LEFT SIDE - Cart Items */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            {cart.map((item) => (
                                <HorizontalProductCard key={item.id} product={item} />
                            ))}
                        </div>

                        {/* RIGHT SIDE - Price Summary */}
                        <aside className="lg:col-span-4 sticky top-28">
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                                <PriceDetails />
                            </div>
                            <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                                <p className="text-xs text-blue-800 leading-relaxed font-medium">
                                    <span className="material-symbols-outlined !text-sm align-middle mr-1">verified_user</span>
                                    Secure Checkout: Your data is protected by industry-leading encryption.
                                </p>
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Cart;
