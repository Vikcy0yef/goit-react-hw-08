import React, { useState } from 'react';
import s from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import { toast } from 'react-hot-toast';  

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteContact(contact.id));
    toast.success('Contact deleted successfully!');  
    setIsModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsModalOpen(false);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(updateContact({ id: contact.id, name, number }));
    toast.success('Contact updated successfully!');  
    setIsEditing(false);
  };

  return (
    <div className={s.item}>
      {isEditing ? (
        <div className={s.editForm}>
          <input className={s.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Edit name"
          />
          <input className={s.input}
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Edit number"
          />
          <button className={s.but} onClick={handleSave}>Save</button>
          <button className={s.but} onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className={s.contact}>
          <span className={s.desc}>{contact.name}:</span>
          <span className={s.desc}>{contact.number}</span>
        </div>
      )}
      <div className={s.ediForm}>
        <button className={s.button} onClick={handleEditToggle}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>

      <button className={s.button} onClick={handleDeleteClick}>
        Delete
        </button>
      </div>
   

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
};
export default Contact;