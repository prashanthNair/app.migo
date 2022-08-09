/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-debugger */
/* eslint-disable import/no-self-import */
/* eslint-disable import/prefer-default-export */
import _ from "lodash";  
import { BUSINESS_CATEGORY } from "../data"; 
export const getCategories = () => {
  const arr = [];
  _.forEach(BUSINESS_CATEGORY, (x) => {
    arr.push(x.category);
  });

  const data = _.map(arr, (x) => ({
    label: x,
    value: x,
  }));
  return data;
};

export const getSubCategories = (category) => {
  const obj = _.find(BUSINESS_CATEGORY, (x) => x.category === category);
  if (!obj) return [];
  const data = _.map(obj.subCategory, (x) => ({
    label: x,
    value: x,
  }));
  return data;
}; 

export const utcToLocalDateFormatter = (value) => {
  const parsedDate = Date.parse(value);
  const isValidDate = Number.isNaN(parsedDate);
  if (isValidDate) {
    return "";
  }
  const date = new Date(parsedDate);
  value = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}`;
  return value;
};

export const getCurrentDateTime = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}`;
};

export const getProfileCompletionScore = (data) => {
  let score = 0;
  if (!data) return score;
  if (data.AccountActivation === "Completed") {
    score += (100 * 16.66) / 100;
  }
  if (data.AddressDetails === "Completed") {
    score += (100 * 16.66) / 100;
  }
  if (data.BankDetails === "Completed") {
    score += (100 * 16.66) / 100;
  }
  if (data.BusinessDetails === "Completed") {
    score += (100 * 16.66) / 100;
  }
  if (data.ContactDetails === "Completed") {
    score += (100 * 16.66) / 100;
  }
  if (data.Documents === "Completed") {
    score += (100 * 16.66) / 100;
  }
  score = Math.round(score);
  return score;
};
 
export const responseBuilder = (response) => { 
  debugger;
  let responseBody = null;
  if (!response) {
    return responseBody;
  }
  const { data } = response;
  if (!data) {
    return responseBody;
  }
  if (
    data?.statusCode &&
    (data?.statusCode === 200 || data?.statusCode === 201)
  ) {
    responseBody = data.data || {};
  }
  return responseBody;
};

function renderProductCount(page, perPageProduct, totalProduct) {
  let startNumber = (page - 1) * perPageProduct;
  let endNumber = page * perPageProduct;

  if (endNumber > totalProduct) {
    endNumber = totalProduct;
  }

  return `Showing ${startNumber - 1}-${endNumber} of ${totalProduct} products`;
}

export { renderProductCount };

