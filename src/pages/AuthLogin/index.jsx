import React from "react";
import Login from "../../components/Login";
import Navbar from "../../components/Navbar";

export const AuthLogin = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Login />
            </main>
            
        </div>
    );
}