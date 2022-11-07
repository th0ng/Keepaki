import axios from 'axios';
const baseUrl = '/api/users';

const register = async (credential) => {
  const response = await axios.post(baseUrl, credential);
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { register };