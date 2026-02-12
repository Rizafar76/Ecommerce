import React from "react";


const Navbar = () => {
    return (
        <header className="flex items-center bg-blue-900 py-4 px-8 w-full text-slate-50 gap-280">
            <div>
                <h1 className="text-5xl">Shop It</h1>
            </div>
            <nav className="ml-auto flex flex-row items-center gap-12">
                <span className="material-symbols-outlined hover:cursor-pointer">
                    favorite
                </span>
                <span className="material-symbols-outlined hover:cursor-pointer">
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
