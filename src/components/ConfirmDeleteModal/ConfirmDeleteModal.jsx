import React from 'react';
import s from './ConfirmDeleteModal.module.css';

const ConfirmDeleteModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h3>Are you sure you want to delete this contact?</h3>
        <button  onClick={onConfirm} className={s.confirmButton}>Yes</button>
        <button onClick={onCancel} className={s.cancelButton}>No</button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;