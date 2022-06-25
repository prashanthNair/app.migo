import { apiInstance } from "api";

export const getProducts = async (brandId, status) => {
  try {
    const { data } = await apiInstance.get(
      `/inventory/products/brand/${brandId}`,
      {
        params: {
          Status: status,
        },
      }
    );
    return data;
  } catch (err) {
    return null;
  }
};
