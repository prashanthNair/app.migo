import { apiInstance } from '../../../../../src/utils/helper/api';
import { baseApiUrl } from '../../../../../src/utils/constants';
import { responseBuilder } from '../../../../../src/utils/helper/index';

export const getProductDetails = async (productId, brandId) => {
  return responseBuilder(
    await apiInstance.get(
      `${baseApiUrl}/inventory/products/brand/${brandId}/product/${productId}`,
      {
        params: {
          Status: 'PUBLISHED',
        },
      }
    )
  );
};

export const addToCart = async (customerId, payload) => {
  try {
    debugger
   const postRes= await apiInstance.post(`${baseApiUrl}/oms/cart/${customerId}`, payload)
   if(!postRes)
    return responseBuilder(null );
    
    return responseBuilder(
      await apiInstance.get(`${baseApiUrl}/oms/cart/${customerId}`)
    );

  } catch (err) {
    return null;
  }
};
 
export const getCart = async (customerId) => {
  try {
    debugger
    return responseBuilder(
      await apiInstance.get(`${baseApiUrl}/oms/cart/${customerId}`)
    );
  } catch (err) {
    return null;
  }
};
