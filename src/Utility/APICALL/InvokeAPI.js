import axios from "axios";

const InvokeAPI = async (
  endpoint,
  type,
  body,
  headerParams,
  queryParam,
  urlParam
) => {
  const baseURL = process.env.REACT_APP_PRODUCT_BASE_URL;
  const token = process.env.REACT_APP_API_TOEKN;
  const headerObj = { Authorization: `bearer ${token}` }
  const option = {
    method: type,
    url: baseURL + endpoint,
    headers: { ...headerObj,...headerParams},
    params: queryParam,
    data: body,
  };
  let response;
  console.log(option);
  try {
    response = await axios.request(option);
  } catch (e) {
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};
export default InvokeAPI;

export const baseURl = process.env.REACT_APP_URL;
