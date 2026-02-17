import axios from "axios";

const Base_URL = "https://api.escuelajs.co/api/v1";

const getAllCategories =  async () => {
    const url = `${Base_URL}/categories`;
    try{
        const {data} = await axios.get(url);
        console.log(data);
        return data;
    }
    catch(error){
        return error;
    }
}
export default getAllCategories;