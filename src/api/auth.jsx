import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com"

export const login = async (email, password) => {
    const url = `${BASE_URL}/users`;
    try {
        const { data } = await axios.post(url,
             { email: email,
             password: password
             });
        console.log(data);
        return data;
    }
    catch (error) {
        return error;
    }
}