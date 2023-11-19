import { createContext, useContext } from 'react';

// Create the context
export const ScrollContext = createContext();

// Create a custom hook for easy consumption
export const useScroll = () => {
    return useContext(ScrollContext);
};