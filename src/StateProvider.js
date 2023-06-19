import { createContext, useContext, useReducer } from "react";

//This is a data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialstate, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialstate)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
