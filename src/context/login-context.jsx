import { createContext,useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const initialState = {
    email:'',
    password:'',
};

    const [{email,password}, loginDispatch] = useReducer(loginReducer,initialState);

    return (
        <LoginContext.Provider value={{email,password, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginProvider };