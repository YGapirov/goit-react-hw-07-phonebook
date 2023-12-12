import { GlobalStyle } from '../../GlobalStyle';
import { Container, Title, SubTitle } from './App.styled';

import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts </SubTitle>
      {contacts.length > 0 ? <Filter /> : <p>You don't have any contacts</p>}
      {isLoading && <p>Loading contacts...</p>}
      {contacts.length > 0 && <ContactList />}
      {error && <p>{error}</p>}
      <GlobalStyle />
    </Container>
  );
};
