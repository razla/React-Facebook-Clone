import React, { createContext, useContext, useReducer } from 'react';

// Preparing the datalayer
export const StateContext = createContext();

// Higher order component - wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// If we want to pull something from the datalayer
export const useStateValue = () => useContext(StateContext);