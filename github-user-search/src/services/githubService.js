import axios from "axios";

const fetchUserData = async (userName) => {
  const API_URL = `https://api.github.com/users/${userName}`;

  const response = await axios.get(API_URL);
  return response.data;
};
export default fetchUserData;