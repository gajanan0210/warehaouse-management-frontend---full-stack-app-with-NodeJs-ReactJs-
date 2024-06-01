import React, { useState, useEffect } from 'react';
import './css/warehouse.css';

function AddWarehouseForm({ onCancel, onSave }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch the states and cities from your data source or API
    const fetchedStates = [
      { name: 'Maharashtra', cities: ['Pune', 'Mumbai'] },
      { name: 'Telangana', cities: ['Hyderabad', 'Warangal'] },
      { name: 'Gujarat', cities: ['Ahmedabad', 'Surat'] },
    ];
    setStates(fetchedStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      const state = states.find((state) => state.name === selectedState);
      setCities(state ? state.cities : []);
      setSelectedCity('');
    }
  }, [selectedState, states]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, code, state: selectedState, city: selectedCity });
    setName('');
    setCode('');
    setSelectedState('');
    setSelectedCity('');
  };

  return (
    <div className="add-warehouse-form">
      <h1>Add Warehouse</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Warehouse Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Warehouse Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.name} value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>City</label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedState}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddWarehouseForm;
