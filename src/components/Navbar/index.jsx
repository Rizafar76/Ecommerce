import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const goToHome = () => navigate("/");
    const goToCart = () => navigate("/cart");

    return (
        <header className="flex items-center bg-blue-900 py-4 px-8 w-full text-slate-50 gap-280 mb-20 pb-8">
            <div>
                <h1 onClick={goToHome} className="text-5xl hover:cursor-pointer">Shop It</h1>
            </div>
            <nav className="ml-auto flex flex-row items-center gap-12">
                <span className="material-symbols-outlined hover:cursor-pointer">
                    favorite
                </span>
                <span onClick={goToCart} className="material-symbols-outlined hover:cursor-pointer">
                    shopping_cart
                </span>
                <span className="material-symbols-outlined hover:cursor-pointer">
                    account_circle
                </span>
            </nav>
        </header>
    );
}

export default Navbar;
