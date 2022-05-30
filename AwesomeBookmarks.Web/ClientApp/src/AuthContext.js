import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();
const UserContextComponent = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    return useContext(UserContext);
}
export { UserContextComponent, useUser }