import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactPage.module.css"


const ContactsPage = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section >
      <ul className={s.list} >
        <li >
          <ContactForm />
          <SearchBox />
        </li>
        <li >
          <ContactList />
        </li>
      </ul>
    </section>
  );
};

export default ContactsPage;