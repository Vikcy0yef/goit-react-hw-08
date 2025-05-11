import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { toast } from 'react-hot-toast';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteClick = (contactId) => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteContact(contactToDelete)); 
    setIsModalOpen(false);
    toast.success('Contact deleted successfully!'); 
  };

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact contact={contact} onDeleteClick={handleDeleteClick} />
          </li>
        ))}
      </ul>

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ContactList;