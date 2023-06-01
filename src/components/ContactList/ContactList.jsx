import { Ul, Button, Li } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = filter => {
    return contacts.contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Ul>
      {filteredContacts(filter).map(({ id, name, number }) => (
        <Li key={id}>
          <div>
            {name}: {number}
          </div>
          <Button onClick={() => dispatch(deleteContact(id))} type="button">
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
