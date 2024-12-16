import axios from "axios";

export const getApiHelper = (api: any, method: any) => {
  const apiUrl = api;
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: apiUrl,
    })
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};
