// import React, { useState, useEffect } from 'react';
// import './css/State.css';

// function EditStateForm({ stateData, onCancel, onSave, onDelete }) {
//   const [name, setName] = useState('');
//   const [code, setCode] = useState('');
//   const [status, setStatus] = useState('Active');

//   useEffect(() => {
//     if (stateData) {
//       setName(stateData.name);
//       setCode(stateData.code);
//       setStatus(stateData.status);
//     }
//   }, [stateData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ id: stateData.id, name, code, status });
//   };

//   const handleDelete = () => {
//     onDelete(stateData.id);
//   };

//   return (
//     <div className="state-form">
//       <h1>Edit State</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>State Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>State Code</label>
//           <input
//             type="text"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Status</label>
//           <select value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//         <div className="form-buttons">
//           <button type="button" onClick={onCancel}>Cancel</button>
//           <button type="submit">Save</button>
//           {status === 'Active' && <button type="button" onClick={handleDelete}>Delete</button>}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditStateForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/State.css';

function EditStateForm({ stateData, onCancel, onSave, onDelete }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('Active');

  useEffect(() => {
    if (stateData) {
      setName(stateData.name);
      setCode(stateData.code);
      setStatus(stateData.status);
    }
  }, [stateData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedState = { id: stateData.id, name, code, status };
    axios.put(`http://localhost:5000/api/states/${stateData.id}/status`, updatedState)
      .then(response => {
        onSave(response.data); // This will update the state in the parent component
      })
      .catch(error => {
        console.error('Error updating state:', error);
      });
  };

  const handleDelete = () => {
    onDelete(stateData.id);
  };

  return (
    <div className="state-form">
      <h1>Edit State</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>State Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>State Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Save</button>
          {status === 'Active' && <button type="button" onClick={handleDelete}>Delete</button>}
        </div>
      </form>
    </div>
  );
}

export default EditStateForm;
