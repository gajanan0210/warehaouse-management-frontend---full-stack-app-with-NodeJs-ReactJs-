import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get('/api/states');
                setStates(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching states:', error);
                setLoading(false);
            }
        };

        fetchStates();
    }, []);

    const createState = async (state) => {
        try {
            const response = await axios.post('http://localhost:5000/api/states', state);
            setStates([...states, response.data]);
        } catch (error) {
            console.error('Error creating state:', error);
        }
    };

    const updateState = async (id, updatedState) => {
        try {
            const response = await axios.put(`/api/states/${id}`, updatedState);
            setStates(states.map(state => (state._id === id ? response.data : state)));
        } catch (error) {
            console.error('Error updating state:', error);
        }
    };

    const deleteState = async (id) => {
        try {
            await axios.delete(`/api/states/${id}`);
            setStates(states.filter(state => state._id !== id));
        } catch (error) {
            console.error('Error deleting state:', error);
        }
    };

    return (
        <StateContext.Provider value={{ states, loading, createState, updateState, deleteState }}>
            {children}
        </StateContext.Provider>
    );
};
