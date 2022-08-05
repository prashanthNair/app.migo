// import axios from "axios"
import { apiInstance } from 'utils/helper/api';
import { baseApiUrl } from 'utils/helper/api';
import { responseBuilder } from '../helper/index';

export const getProducts = async () => {
  debugger;
  return responseBuilder(
    await apiInstance.get(`${baseApiUrl}/inventory/products`, {
      params: {
        Status: 'PUBLISHED',
      },
    })
  );
};
export const getProductDetails = async (productId, brandId) => {
  debugger;
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

export const searchProduct = async (params) => {
  debugger;
  return responseBuilder(
    await apiInstance.get(`${baseApiUrl}/inventory/products/search`, {
      params: {
        params: params,
      },
    })
  );
};
