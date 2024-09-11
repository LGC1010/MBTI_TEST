import axios from 'axios';

const API_URL = 'https://melodious-crimson-pea.glitch.me';

export const getTestResult = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  console.log(id);
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  console.log(id, visibility);
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });
  return response.data;
};
