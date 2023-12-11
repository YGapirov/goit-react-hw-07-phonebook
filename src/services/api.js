import axios from 'axios';

axios.defaults.baseURL =
  'https://65770bf1197926adf62d2ada.mockapi.io/contacts/';

//отримуємо
export const getContacts = async () => {
  const response = await axios('contacts');
  return response.data;
};

//додаєм
export const addContact = async newContact => {
  const response = await axios.post('contacts', newContact);
  return response.data;
};

//делет
export const delContact = async id => {
  const response = await axios.delete(`contacts/${id}`);
  return response.data;
};
