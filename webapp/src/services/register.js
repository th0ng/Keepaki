import axios from 'axios';
const baseUrl = '/api/users';

const register = async (username, name, password) => {
  const response = await axios.post(baseUrl, JSON.stringify({
    username: username,
    name: name,
    password: password
  }));
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { register };