import React, { useState } from 'react';
import './css/State.css';
import AddStateForm from './AddStateForm';
import EditStateForm from './EditStateForm';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';

function State() {
  const [searchTerm, setSearchTerm] = useState('');
  const [states, setStates] = useState([
    { id: 123, name: 'Maharashtra', code: 'MH15', status: 'Active' },
    { id: 124, name: 'Telangana', code: 'TN24', status: 'Active' },
    { id: 125, name: 'Gandhinager', code: 'GJ07', status: 'Inactive' },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingState, setEditingState] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteStateId, setDeleteStateId] = useState(null);


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './css/State.css';
// import AddStateForm from './AddStateForm';
// import EditStateForm from './EditStateForm';
// import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';

// function State() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [states, setStates] = useState([]);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [editingState, setEditingState] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteStateId, setDeleteStateId] = useState(null);

//   // Fetch states from the backend when the component mounts
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/states')
//       .then(response => {
//         setStates(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching states:', error);
//       });
//   }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNewClick = () => {
    setShowAddForm(true);
    setShowEditForm(false);
    setEditingState(null);
  };

  const handleEditClick = (state) => {
    setEditingState(state);
    setShowEditForm(true);
    setShowAddForm(false);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleSave = (newState) => {
    if (newState.id) {
      setStates(states.map((state) => (state.id === newState.id ? newState : state)));
    } else {
      newState.id = states.length + 1;
      newState.status = 'Active';
      setStates([...states, newState]);
    }
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleDeleteClick = (stateId) => {
    setDeleteStateId(stateId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setStates(states.map((state) =>
      state.id === deleteStateId ? { ...state, status: 'Inactive' } : state
    ));
    setShowDeleteModal(false);
    setShowEditForm(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const visibleStates = searchTerm
    ? states.filter((state) =>
        state.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : states;

  return (
    <div className="state">
      {!showAddForm && !showEditForm ? (
        <>
          <h1>State</h1>
          <div className="controls">
            <input
              type="text"
              placeholder="Search by state name..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-box"
            />
            <button className="add-new-button" onClick={handleAddNewClick}>Add New</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>State Name</th>
                <th>State Code</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleStates.map((state) => (
                <tr key={state.id}>
                  <td>{state.id}</td>
                  <td>{state.name}</td>
                  <td>{state.code}</td>
                  <td className={state.status === 'Active' ? 'active' : 'inactive'}>{state.status}</td>
                  <td>
                    <button onClick={() => handleEditClick(state)}>Edit</button>
                    {state.status === 'Active' && (
                      <button onClick={() => handleDeleteClick(state.id)}>Delete</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <DeleteConfirmationModal
            show={showDeleteModal}
            onCancel={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
          />
        </>
      ) : showAddForm ? (
        <AddStateForm onCancel={handleCancel} onSave={handleSave} />
      ) : (
        <EditStateForm stateData={editingState} onCancel={handleCancel} onSave={handleSave} onDelete={handleDeleteClick} />
      )}
    </div>
  );
}
export default State;


// import React, { useContext, useState, useEffect } from 'react';
// import './css/State.css';
// import AddStateForm from './AddStateForm';
// import EditStateForm from './EditStateForm';
// import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
// import { StateContext } from '../components/StateContext';

// function State() {
//   const { states, loading, createState, updateState, deleteState } = useContext(StateContext);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [editingState, setEditingState] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteStateId, setDeleteStateId] = useState(null);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleAddNewClick = () => {
//     setShowAddForm(true);
//     setShowEditForm(false);
//     setEditingState(null);
//   };

//   const handleEditClick = (state) => {
//     setEditingState(state);
//     setShowEditForm(true);
//     setShowAddForm(false);
//   };

//   const handleCancel = () => {
//     setShowAddForm(false);
//     setShowEditForm(false);
//   };

//   const handleSave = (newState) => {
//     if (newState.id) {
//       updateState(newState.id, newState);
//     } else {
//       createState(newState);
//     }
//     setShowAddForm(false);
//     setShowEditForm(false);
//   };

//   const handleDeleteClick = (stateId) => {
//     setDeleteStateId(stateId);
//     setShowDeleteModal(true);
//   };

//   const handleDeleteConfirm = () => {
//     deleteState(deleteStateId);
//     setShowDeleteModal(false);
//     setShowEditForm(false);
//   };

//   const handleDeleteCancel = () => {
//     setShowDeleteModal(false);
//   };

//   const visibleStates = searchTerm
//     ? states.filter((state) =>
//         state.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : states;

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="state">
//       {!showAddForm && !showEditForm ? (
//         <>
//           <h1>State</h1>
//           <div className="controls">
//             <input
//               type="text"
//               placeholder="Search by state name..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="search-box"
//             />
//             <button className="add-new-button" onClick={handleAddNewClick}>Add New</button>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>State Name</th>
//                 <th>State Code</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {visibleStates.map((state) => (
//                 <tr key={state._id}>
//                   <td>{state._id}</td>
//                   <td>{state.name}</td>
//                   <td>{state.code}</td>
//                   <td className={state.status === 'active' ? 'active' : 'inactive'}>{state.status}</td>
//                   <td>
//                     <button onClick={() => handleEditClick(state)}>Edit</button>
//                     {state.status === 'active' && (
//                       <button onClick={() => handleDeleteClick(state._id)}>Delete</button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <DeleteConfirmationModal
//             show={showDeleteModal}
//             onCancel={handleDeleteCancel}
//             onConfirm={handleDeleteConfirm}
//           />
//         </>
//       ) : showAddForm ? (
//         <AddStateForm onCancel={handleCancel} onSave={handleSave} />
//       ) : (
//         <EditStateForm stateData={editingState} onCancel={handleCancel} onSave={handleSave} onDelete={handleDeleteClick} />
//       )}
//     </div>
//   );
// }

// export default State;


