import { ContactCard } from '../ContactCard/ContactCard';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhone } from '../../redux/contactSlice';

import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts.contacts); //отримує значення контакт із store
  // const filter = useSelector(state => state.filter.filter);

  const handleDelete = contactId => dispatch(deletePhone(contactId));

  return (
    // visibleContacts.length > 0 && (

    <List>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </List>
  );
};
