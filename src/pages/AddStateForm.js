// import React, { useState } from 'react';
// import './css/State.css';

// function AddStateForm({ onCancel, onSave }) {
//   const [name, setName] = useState('');
//   const [code, setCode] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ name, code });
//     setName('');
//     setCode('');
//   };

//   return (
//     <div className="add-state-form">
//       <h1>Add State</h1>
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
//         <div className="form-buttons">
//           <button type="button" onClick={onCancel}>Cancel</button>
//           <button type="submit">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddStateForm;


import React, { useState } from 'react';
import './css/State.css';
import axios from 'axios'; // Import axios for making HTTP requests

function AddStateForm({ onCancel }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API endpoint to store the new state data
      const response = await axios.post('http://localhost:5000/api/states', { name, code });
      // Check if the request was successful
      if (response.status === 201) {
        // If successful, clear the input fields
        setName('');
        setCode('');
        // Optionally, you can handle success feedback to the user
        alert('State added successfully!');
      } else {
        // If the request was not successful, handle the error accordingly
        alert('Failed to add state. Please try again.');
      }
    } catch (error) {
      // If an error occurs during the API request, handle it
      console.error('Error adding state:', error);
      alert('An error occurred while adding state. Please try again.');
    }
  };

  return (
    <div className="add-state-form">
      <h1>Add State</h1>
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
        <div className="form-buttons">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddStateForm;
