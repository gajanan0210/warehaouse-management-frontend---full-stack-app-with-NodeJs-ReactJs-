import React, { useState } from 'react';
import './css/EditCityForm.css'; // Import EditCityForm.css

function EditCityForm({ cityData, onCancel, onSave, states }) {
  const [cityName, setCityName] = useState(cityData.name);
  const [cityCode, setCityCode] = useState(cityData.code);
  const [selectedState, setSelectedState] = useState(cityData.state);
  const [status, setStatus] = useState(cityData.status);

  const handleSave = () => {
    if (cityName && cityCode && selectedState) {
      onSave({ id: cityData.id, name: cityName, code: cityCode, state: selectedState, status });
    }
  };

  const handleDelete = () => {
    onSave({ id: cityData.id, name: cityName, code: cityCode, state: selectedState, status: 'Inactive' });
  };

  return (
    <div className="edit-city-form">
      <h2>Edit City</h2>
      <div className="form-group">
        <label>State</label>
        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
          <option value="" disabled>Select State</option>
          {states.map((state) => (
            <option key={state.id} value={state.name}>{state.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>City Name</label>
        <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>City Code</label>
        <input type="text" value={cityCode} onChange={(e) => setCityCode(e.target.value)} />
      </div>
      
      <div className="form-group">
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="form-actions">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default EditCityForm;
