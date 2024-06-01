import React, { useState } from 'react';
import './css/warehouse.css';
import AddWarehouseForm from './AddWarehouseForm';
import EditWarehouseForm from './EditWarehouseForm';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';

function Warehouse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [warehouses, setWarehouses] = useState([
    { id: 1, name: 'Warehouse 1', code: 'W1', state: 'Maharashtra', city: 'Pune', status: 'Active' },
    { id: 2, name: 'Warehouse 2', code: 'W2', state: 'Telangana', city: 'Hyderabad', status: 'Active' },
    { id: 3, name: 'Warehouse 3', code: 'W3', state: 'Gujarat', city: 'Ahmedabad', status: 'Inactive' },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingWarehouse, setEditingWarehouse] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteWarehouseId, setDeleteWarehouseId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNewClick = () => {
    setShowAddForm(true);
    setShowEditForm(false);
    setEditingWarehouse(null);
  };

  const handleEditClick = (warehouse) => {
    setEditingWarehouse(warehouse);
    setShowEditForm(true);
    setShowAddForm(false);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleSave = (newWarehouse) => {
    if (newWarehouse.id) {
      setWarehouses(warehouses.map((warehouse) => (warehouse.id === newWarehouse.id ? newWarehouse : warehouse)));
    } else {
      newWarehouse.id = warehouses.length + 1;
      newWarehouse.status = 'Active';
      setWarehouses([...warehouses, newWarehouse]);
    }
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleDeleteClick = (warehouseId) => {
    setDeleteWarehouseId(warehouseId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setWarehouses(warehouses.map((warehouse) =>
      warehouse.id === deleteWarehouseId ? { ...warehouse, status: 'Inactive' } : warehouse
    ));
    setShowDeleteModal(false);
    setShowEditForm(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const visibleWarehouses = searchTerm
    ? warehouses.filter((warehouse) =>
        warehouse.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : warehouses;

  return (
    <div className="warehouse">
      {!showAddForm && !showEditForm ? (
        <>
          <h1>Warehouse</h1>
          <div className="controls">
            <input
              type="text"
              placeholder="Search by warehouse name..."
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
                <th>Warehouse Name</th>
                <th>Warehouse Code</th>
                <th>State</th>
                <th>City</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleWarehouses.map((warehouse) => (
                <tr key={warehouse.id}>
                  <td>{warehouse.id}</td>
                  <td>{warehouse.name}</td>
                  <td>{warehouse.code}</td>
                  <td>{warehouse.state}</td>
                  <td>{warehouse.city}</td>
                  <td className={warehouse.status === 'Active' ? 'active' : 'inactive'}>{warehouse.status}</td>
                  <td>
                    <button onClick={() => handleEditClick(warehouse)}>Edit</button>
                    {warehouse.status === 'Active' && (
                      <button onClick={() => handleDeleteClick(warehouse.id)}>Delete</button>
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
        <AddWarehouseForm onCancel={handleCancel} onSave={handleSave} />
      ) : (
        <EditWarehouseForm warehouseData={editingWarehouse} onCancel={handleCancel} onSave={handleSave} onDelete={handleDeleteClick} />
      )}
    </div>
  );
}

export default Warehouse;
