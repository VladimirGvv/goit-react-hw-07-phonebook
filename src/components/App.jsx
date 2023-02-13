import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts";
import styles from './App.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
    return (
      <div className={styles.phone_form}>
        <h1>Phonebook</h1>
        <PhoneForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts />
      </div>
    );
};
