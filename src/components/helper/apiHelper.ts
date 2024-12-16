import axios from "axios";

export const getApiHelper = (api: string, method: string) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: api,
    })
      .then((res) => {
        resolve({ success: true, data: res.data });
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        reject({ success: false, error: errorMessage });
      });
  });
};
