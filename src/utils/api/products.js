import axios from "axios"
import { baseApiUrl } from "utils/helper/api"; 
import { responseBuilder } from '../helper/index';

export const getProducts = async () => {
    debugger
    const {data} = await axios.get(`${baseApiUrl}/inventory/products`,{
      params: {
        Status: "PUBLISHED",
      }
    }); 
   return data
  };
  export const getProductDetails = async (productId) => {
    debugger
    // const data={id:productId}
   return responseBuilder(await axios.get(`${baseApiUrl}/inventory/products/product/details/${productId}`,{
      params: {
        Status: "PUBLISHED",
      }
    }));  
  };
  