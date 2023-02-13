import styles from './Contacts.module.scss';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';


export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <div>
      {filterContacts.map(contact => {
        return (
          <ol className={styles.contacts} key={nanoid()}>
            <li key={nanoid()} className={styles.contacts_item}>
              {contact.name}: {contact.number}
            <button
              type="button"
              className={styles.btn}
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              Delete
              </button>
            </li>
          </ol>
        );
      })}
    </div>
  );
}
