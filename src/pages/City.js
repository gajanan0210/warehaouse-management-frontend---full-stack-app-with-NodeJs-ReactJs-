import React, { useState } from 'react';
import './css/City.css';
import AddCityForm from './AddCityForm';
import EditCityForm from './EditCityForm';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';

const City = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([
    { id: 1, name: 'Pune', code: 'PNQ', state: 'Maharashtra', status: 'Active' },
    { id: 2, name: 'Hyderabad', code: 'HYD', state: 'Telangana', status: 'Active' },
    { id: 3, name: 'Ahmedabad', code: 'AMD', state: 'Gujarat', status: 'Inactive' },
  ]);
  const [states, setStates] = useState([
    { id: 123, name: 'Maharashtra', code: 'MH15', status: 'Active' },
    { id: 124, name: 'Telangana', code: 'TN24', status: 'Active' },
    { id: 125, name: 'Gandhinager', code: 'GJ07', status: 'Inactive' },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingCity, setEditingCity] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCityId, setDeleteCityId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNewClick = () => {
    setShowAddForm(true);
    setShowEditForm(false);
    setEditingCity(null);
  };

  const handleEditClick = (city) => {
    setEditingCity(city);
    setShowEditForm(true);
    setShowAddForm(false);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleSave = (newCity) => {
    if (newCity.id) {
      setCities(cities.map((city) => (city.id === newCity.id ? newCity : city)));
    } else {
      newCity.id = cities.length + 1;
      newCity.status = 'Active';
      setCities([...cities, newCity]);
    }
    setShowAddForm(false);
    setShowEditForm(false);
  };

  const handleDeleteClick = (cityId) => {
    setDeleteCityId(cityId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setCities(cities.map((city) =>
      city.id === deleteCityId ? { ...city, status: 'Inactive' } : city
    ));
    setShowDeleteModal(false);
    setShowEditForm(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const visibleCities = searchTerm
    ? cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cities;

  return (
    <div className="city-container">
      {!showAddForm && !showEditForm ? (
        <>
          <h1>City</h1>
          <div className="controls">
            <input
              type="text"
              placeholder="Search by city name..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-box"
            />
            <button className="add-new-button" onClick={handleAddNewClick}>Add New</button>
          </div>
          <table className="city-table">
            <thead>
              <tr>
                <th className="city-th">Id</th>
                <th className="city-th">City Name</th>
                <th className="city-th">City Code</th>
                <th className="city-th">State Name</th>
                <th className="city-th">Status</th>
                <th className="city-th">Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleCities.map((city) => (
                <tr key={city.id}>
                  <td className="city-td">{city.id}</td>
                  <td className="city-td">{city.name}</td>
                  <td className="city-td">{city.code}</td>
                  <td className="city-td">{city.state}</td>
                  <td className="city-td">
                    <span className={city.status === 'Active' ? 'city-active' : 'city-inactive'}>
                      {city.status}
                    </span>
                  </td>
                  <td className="city-td">
                    <button className="city-button" onClick={() => handleEditClick(city)}>Edit</button>
                    {city.status === 'Active' && (
                      <button className="city-button" onClick={() => handleDeleteClick(city.id)}>Delete</button>
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
        <AddCityForm onCancel={handleCancel} onSave={handleSave} states={states.filter(state => state.status === 'Active')} />
      ) : (
        <EditCityForm cityData={editingCity} onCancel={handleCancel} onSave={handleSave} states={states.filter(state => state.status === 'Active')} />
      )}
    </div>
  );
};

export default City;
