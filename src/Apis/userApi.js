import axios from 'axios';

export const GetUser = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  return result;
};
