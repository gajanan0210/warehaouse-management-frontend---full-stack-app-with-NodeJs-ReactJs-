// frontend/src/components/LogoutModal.js

import React from 'react';
import './DeleteConfirmationModal.css';
import { FaExclamationCircle } from 'react-icons/fa';

function LogoutModal({ show, onCancel, onConfirm }) {
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
          <p>Do you really want to log out?</p>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="delete-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
