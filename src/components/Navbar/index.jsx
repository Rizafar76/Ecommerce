import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../customHooks/useCart";

const Navbar = () => {
    const navigate = useNavigate();
    const { cart } = useCart();

    const goToHome = () => navigate("/");
    const goToCart = () => navigate("/cart");

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-6 px-6 md:px-12 w-full transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div onClick={goToHome} className="flex items-center gap-2 cursor-pointer group">
                    <div className="bg-blue-900 text-white p-2 rounded-lg">
                        <span className="material-symbols-outlined !text-2xl">shopping_bag</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">Shop It</h1>
                </div>

                <nav className="flex items-center gap-6 md:gap-8">
                    <button className="text-slate-600 hover:text-blue-900 transition-colors relative">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <button onClick={goToCart} className="text-slate-600 hover:text-blue-900 transition-colors relative">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-blue-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                                {cart.length}
                            </span>
                        )}
                    </button>
                    <button className="text-slate-600 hover:text-blue-900 transition-colors">
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
