import { apiInstance } from "api";
import { responseBuilder } from "lib/helper"; 
export default ( ) => {
    return responseBuilder(
        await apiInstance.get(`/inventory/products`, {
          params: {
            Status: "PUBLISHED",
          },
        })
      );
  }
  