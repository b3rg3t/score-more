import axios from "axios";
import { CheckURL } from "./helperFuntions";

const HEADERS_API = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
};

const BASE_URL: any = CheckURL();

/*        API CALLS     */

const GET_API = async (url: String) => {
  try {
    const response = await axios({
      method: "GET",
      withCredentials: true,
      url: `${BASE_URL}${url}`,
      headers: HEADERS_API,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

const POST_API = async (url: String, body: Object) => {
  try {
    const response = await axios({
      method: "POST",
      withCredentials: true,
      url: `${BASE_URL}${url}`,
      headers: HEADERS_API,
      data: body,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export { GET_API, POST_API };
