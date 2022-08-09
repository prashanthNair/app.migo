


import { apiInstance } from '../../../../src/utils/helper/api';
import { baseApiUrl } from '../../../../src/utils/constants';
import { responseBuilder } from '../../../../src/utils/helper/index';

export const searchProduct = async (params) => {
    
    return responseBuilder(
      await apiInstance.get(`${baseApiUrl}/inventory/products/search`, {
        params: {
          params: params,
        },
      })
    );
  };