import React from "react";
import { useLogin } from "../../customHooks/useLogin";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {  loginDispatch,email,password } = useLogin();
    const navigate = useNavigate();
    const onEmailChange = (e) => {
        loginDispatch({type:"EMAIL", payload:e.target.value});
    }

    const onPasswordChange = (e) => {
        loginDispatch({type:"PASSWORD", payload:e.target.value});
    }

    const onFormSubmit = async(e) => {
        e.preventDefault();
        const data = await login(email,password);
        console.log(data);

        loginDispatch({
            type:"TOKEN", payload:{
                token:data.access_token
            }
        });
        if(data.access_token){
        navigate("/home");
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                <form className="space-y-6" onSubmit={onFormSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 p-4 m-4">Email *</label>
                        <input onChange={onEmailChange} required type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 p-4 m-4">Password *</label>
                        <input onChange={onPasswordChange}required type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-8">Login</button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700">Sign up</a>
                </p>
            </div>
        </div>
    );
}


export default Login;