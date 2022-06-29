import {
    bottomCategoryList, 
    serviceList,
    topRatedBrandList,
    topRatedList,
    topCategoryList
  } from "fake-db/server/superstore-shop/super-store-data"; 
export const getTopRatedProduct=()=>{
    return topRatedList
}
export const getTopRatedBrand=()=>{
    return  topRatedBrandList
}

export const getServiceList=()=>{
    return serviceList
}
export const getCategories=()=>{
    return bottomCategoryList
}
export const getTopCategories=()=>{
    return topCategoryList
}
