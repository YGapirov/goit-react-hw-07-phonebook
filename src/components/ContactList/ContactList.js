import { ContactCard } from '../ContactCard/ContactCard';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={() => handleDelete(contact.id)} // Передаємо проп onDelete з відповідним ID
        />
      ))}
    </List>
  );
};
