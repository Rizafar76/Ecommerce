import axios from "axios";

const Base_URL = "https://api.escuelajs.co/api/v1";
export const getAllProducts =  async () => {
    const url = `${Base_URL}/products`;

    try{
        const {data} = await axios.get(url);
        console.log(data);
        return data;
    }
    catch(error){
        return error;
    }
}

