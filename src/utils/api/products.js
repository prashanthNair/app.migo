import axios from "axios"
import { baseApiUrl } from "utils/helper/api"; 

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
    const {data} = await axios.get(`${baseApiUrl}/inventory/products/product/details/${productId}`,{
      params: {
        Status: "PUBLISHED",
      }
    }); 
   return data
  };
  