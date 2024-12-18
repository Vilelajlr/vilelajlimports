import axios from "axios";
import { SearchResponse } from "./apiTypes";

export const getProduct = async () => {
 
    try{
        const response = await axios.get<SearchResponse>("https://api.mercadolibre.com/sites/MLB/search?q=eletronicos");
        console.log(response.data.results);
        return response.data;
    } catch(err) {
        console.error(err);
    }

  
};