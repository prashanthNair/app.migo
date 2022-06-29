// import axios from "axios"
import{apiInstance} from "utils/helper/api"
import { baseApiUrl } from "utils/helper/api"; 
import { responseBuilder } from '../helper/index';

export const getProducts = async () => {
    debugger
    const {data} = await apiInstance.get(`${baseApiUrl}/inventory/products`,{
      params: {
        Status: "PUBLISHED",
      }
    }); 
   return data
  };
  export const getProductDetails = async (productId) => {
    debugger 
   return responseBuilder(await apiInstance.get(`${baseApiUrl}/inventory/products/product/details/${productId}`,{
      params: {
        Status: "PUBLISHED",
      }
    }));  
  };
  