// import axios from "axios"
import{apiInstance} from "utils/helper/api"
import { baseApiUrl } from "utils/helper/api"; 
import { responseBuilder } from '../helper/index';

export const getProducts = async () => {
    debugger
    return responseBuilder(await apiInstance.get(`${baseApiUrl}/inventory/products`,{
      params: {
        Status: "PUBLISHED",
      }
    })); 
 
  };
  export const getProductDetails = async (productId) => {
    debugger 
   return responseBuilder(await apiInstance.get(`${baseApiUrl}/inventory/products/product/details/${productId}`,{
      params: {
        Status: "PUBLISHED",
      }
    }));  
  };
  
  export const searchProduct = async (params) => {
    debugger 
   return responseBuilder(await apiInstance.get(`${baseApiUrl}/inventory/products/product/search`,{
      params: {
        params: params,
      }
    }));  
  };