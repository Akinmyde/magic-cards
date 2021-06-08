import axios from 'axios';
import jwt from 'jsonwebtoken';

const baseUrl = 'https://api.magicthegathering.io/v1';
export const getCards = async (setName = '', pageSize = 10) => {
  const response = await axios.get(
    `${baseUrl}/cards?setName=${setName}&pageSize=${pageSize}`
  );
  if (response.status === 200) {
    const { data } = response;
    return data;
  }
  return null;
};

export const getSets = async () => {
  jwt.decode('jfjkfk99095090940905h49504hj');
  const response = await axios.get(`${baseUrl}/sets`);
  if (response.status === 200) {
    const { data } = response;
    return data;
  }
  return null;
};
