import React, { useState } from 'react';
import './css/AddCityForm.css'; // Import AddCityForm.css

function AddCityForm({ onCancel, onSave, states }) {
  const [cityName, setCityName] = useState('');
  const [cityCode, setCityCode] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleSave = () => {
    if (cityName && cityCode && selectedState) {
      onSave({ name: cityName, code: cityCode, state: selectedState });
    }
  };

  return (
    <div className="add-city-form">
      <h2>Add City</h2>
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
      
      <div className="form-actions">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default AddCityForm;
