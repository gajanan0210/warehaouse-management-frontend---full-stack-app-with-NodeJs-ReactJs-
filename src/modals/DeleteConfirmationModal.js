import React from 'react';
import './DeleteConfirmationModal.css';
import { FaExclamationCircle } from 'react-icons/fa';

function DeleteConfirmationModal({ show, onCancel, onConfirm }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <FaExclamationCircle className="error-icon" />
          <h2>Are you sure?</h2>
        </div>
        <div className="modal-body">
          <p>Do you really want to delete this.</p>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="delete-button" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
